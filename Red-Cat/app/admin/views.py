from sqladmin import ModelView
from app.db.models.user import User
from app.db.models.orders import Orders

class UserAdmin(ModelView, model=User):
    column_list = [
        User.id, 
        User.username, 
        User.email, 
        User.is_admin
    ]
    name = "User"
    name_plural = "Users"
    icon = "fa-solid fa-user"


class OrderAdmin(ModelView, model=Orders):
    column_list = [
        Orders.name,
        Orders.contact_phone,
        Orders.area,
        Orders.canvas_type,
        Orders.comment,
        Orders.date_time
    ]

    column_filters = [
        Orders.area,
        Orders.canvas_type,
        Orders.date_time
    ]

    column_searchable_list = [
        Orders.name, 
        Orders.contact_phone,
        Orders.canvas_type,
        Orders.comment,
    ]

    column_sortable_list = [
        Orders.area, 
        Orders.date_time,
        Orders.canvas_type,
    ]

    name = "Order"
    name_plural = "Orders"
    icon = "fa-solid fa-box"
