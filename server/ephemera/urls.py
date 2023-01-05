from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views



urlpatterns = [
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('blacklist/', views.UserLogout.as_view(), name='token-blacklist'),

    path('', views.UserList.as_view(), name='user_list'),
    path('users/create', views.UserCreate.as_view(), name='user_create'),
    path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username'),
    

    path('haikus/', views.HaikuList.as_view(), name='haiku_list'),
    path('haikus/<int:pk>', views.HaikuDetail.as_view(), name='haiku_detail'),

    path('classics/', views.ClassicList.as_view(), name='classics_list'),

    path('api/', include('ephemera.api.urls')),
]