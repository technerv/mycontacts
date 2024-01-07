from knox import views as knox_views
from django.urls import path
from api import views
from .views import *

app_name = "api"

urlpatterns = [
    #Default REST API View
    path('', ShowAllContacts.as_view()), #list all students
    path('create/', CreateContact.as_view()), #create/add new student
    path('<int:pk>/', UpdateContact.as_view()), #update student
    path('delete/<int:pk>/', DeleteContact.as_view()), #delete student

    #login/register/logout API

    path('register/', RegisterAPI.as_view(), name = "register"),
    path('login/', LoginAPI.as_view(), name = "login"),
    path('logout/', knox_views.LogoutView.as_view(), name = "logout"),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name = "logoutall")


]
