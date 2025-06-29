from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView  # Для админки
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_babel import Babel  # Импортируем Flask-Babel
from models import Application  # Импорт модели

# Инициализация Flask-приложения
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database.db'  # Указание пути к базе данных
app.config['SECRET_KEY'] = 'mysecret'  # Секретный ключ для сессий
app.config['BABEL_DEFAULT_LOCALE'] = 'ru'  # Язык по умолчанию

# Инициализация SQLAlchemy
db = SQLAlchemy(app)

# Инициализация Flask-Babel
babel = Babel(app)

# Инициализация админ-панели
admin = Admin(app, name='Admin Panel', template_mode='bootstrap3')

# Добавляем модель Application в админ-панель
admin.add_view(ModelView(Application, db.session))

# Запуск Flask-сервера
if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Указываем порт для Flask
