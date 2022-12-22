from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    tagline = models.CharField(max_length=150, default='no tagline')
    image_url = models.CharField(max_length=300, default='no image')

    def __str__(self):
        return self.name 

class Haiku(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='haikus')
    title = models.CharField(max_length=50, unique=True)
    body = models.TextField(max_length=300)
    created_on = models.DateField(auto_now=True)

    def __str__(self):
        return self.title 