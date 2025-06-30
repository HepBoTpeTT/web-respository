from sqlalchemy import Column, Integer, String, DateTime
from app.db.base import Base
from datetime import datetime

class Orders(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, default='')
    contact_phone = Column(String(11), default='')
    area = Column(Integer, default=0)
    canvas_type = Column(String, default='')
    comment = Column(String, default='')
    date_time = Column(DateTime, default=datetime.now())



