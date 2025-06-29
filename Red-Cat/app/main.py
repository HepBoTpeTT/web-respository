from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import IntegrityError
from .models import Application, Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./database.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Подключаем статичные файлы
app.mount("/static", StaticFiles(directory="frontend"), name="static")

# Основной GET запрос, который будет отдавать твой HTML-файл
@app.get("/", response_class=HTMLResponse)
async def read_index():
    with open("frontend/index.html", encoding="utf-8") as f:
        return HTMLResponse(content=f.read(), status_code=200)

class ApplicationCreate(BaseModel):
    name: str
    ceiling_area: int
    phone: str

@app.post("/applications/")
def create_application(application: ApplicationCreate):
    db = SessionLocal()
    db_application = Application(**application.dict())
    db.add(db_application)
    try:
        db.commit()
        db.refresh(db_application)
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Ошибка при сохранении заявки")
    db.close()
    return db_application
