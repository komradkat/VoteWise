from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('htmx-test/', views.htmx_test, name='htmx_test'),
]
