from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, HaikuSerializer
from .models import User, Haiku

# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class HaikuList(generics.ListCreateAPIView):
    queryset = Haiku.objects.all()
    serializer_class = HaikuSerializer

class HaikuDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Haiku.objects.all()
    serializer_class = HaikuSerializer