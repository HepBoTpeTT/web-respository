# app/settings.py
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "sqlite://./database.db"
    redis_url: str = "redis://localhost:6379/0"
    secret_key: str = "super-secret"
    session_secret: str = "super-session"


settings = Settings()
