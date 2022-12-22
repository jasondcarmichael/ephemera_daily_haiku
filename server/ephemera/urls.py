from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_list, name='user_list'),
    path('haikus/', views.haiku_list, name='haiku_list'),
    path('users/<int:pk>', views.user_detail, name='user_detail'),
    path('haikus/<int:pk>', views.haiku_detail, name='haiku_detail')
]