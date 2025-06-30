from fastapi import FastAPI, Request, HTTPException
from sqladmin import Admin
from app.db.session import engine
from app.admin.views import UserAdmin, OrderAdmin
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, JSONResponse

from fastapi import Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.models.orders import Orders
from app.db.session import AsyncSessionLocal
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI()

# Настройка панели администратора
admin = Admin(app, engine)
admin.add_view(UserAdmin)
admin.add_view(OrderAdmin)

# Подключение статики и шаблонов
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# 📦 Pydantic-схема для валидации данных
class OrderCreate(BaseModel):
    name: str
    contact_phone: str
    area: float = Field(ge=0)
    canvas_type: Optional[str] = ""
    comment: Optional[str] = ""


# ⚙️ Зависимость для подключения сессии
async def get_db_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session


# 🚀 POST /apply
@app.post("/apply")
async def apply_order(
    order: OrderCreate,
    db: AsyncSession = Depends(get_db_session)
):
    try:
        new_order = Orders(
            name=order.name,
            contact_phone=order.contact_phone,
            area=order.area,
            canvas_type=order.canvas_type,
            comment=order.comment,
        )
        db.add(new_order)
        await db.commit()
        await db.refresh(new_order)
        return JSONResponse(status_code=200, content={"message": "Заявка успешно зарегистрирована"})    
    except Exception as e:
        await db.rollback()
        raise HTTPException(status_code=500, detail=f"Ошибка при сохранении заявки: {e}")