from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path("about_us/", views.about_us, name="about_us"),
    path("pricing/", views.pricing, name="pricing"),
    path("contact/", views.contact, name="contact"),
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
]