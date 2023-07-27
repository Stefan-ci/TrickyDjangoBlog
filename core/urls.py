from core import views
from django.urls import path

app_name = "core"

urlpatterns = [
    path("", views.home_view, name="home"),
    path("contact/", views.contact_view, name="contact"),
]
