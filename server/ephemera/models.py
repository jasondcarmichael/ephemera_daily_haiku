from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    tagline = models.CharField(max_length=150, default='no tagline')
    image_url = models.CharField(max_length=300, default='no image')

    def __str__(self):
        return self.username 

class Haiku(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='haikus')
    title = models.CharField(max_length=50, unique=True)
    body = models.TextField(max_length=300)
    created_on = models.DateField(auto_now=True)

    def __str__(self):
        return self.title 

class Classic(models.Model):
    author = models.CharField(max_length=100, default="author name")
    body = models.TextField(max_length=500, default="classic haiku")
    year = models.CharField(max_length=20, default="yyyy")

    def __str__(self):
        return self.author
