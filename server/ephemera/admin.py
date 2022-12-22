from django.contrib import admin
from .models import User, Haiku

# Register your models here.
admin.site.register(User)
admin.site.register(Haiku)