from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter



urlpatterns = [
    path('', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('haikus/', views.HaikuList.as_view(), name='haiku_list'),
    path('haikus/<int:pk>', views.HaikuDetail.as_view(), name='haiku_detail'),
    path('api/', include('ephemera.api.urls')),
]