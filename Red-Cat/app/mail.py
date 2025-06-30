import smtplib
from email.message import EmailMessage

YANDEX_EMAIL = "webjob12345@yandex.ru"
YANDEX_PASSWORD = "your_app_password"  # см. ниже

msg = EmailMessage()
msg["Subject"] = "Тестовое письмо с Яндекса"
msg["From"] = YANDEX_EMAIL
msg["To"] = "recipient@example.com"
msg.set_content("Привет! Это письмо отправлено с помощью Python через Яндекс.")

with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as smtp:
    smtp.login(YANDEX_EMAIL, YANDEX_PASSWORD)
    smtp.send_message(msg)
