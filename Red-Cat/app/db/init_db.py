import asyncio
from app.db.session import engine
from app.db.base import Base
from app.db.models import user, orders


async def init_db():
    async with engine.begin() as conn:
        print("Creating all tables...")
        await conn.run_sync(Base.metadata.create_all)
        print("All tables created.")


if __name__ == "__main__":
    asyncio.run(init_db())
