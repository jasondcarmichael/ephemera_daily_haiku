from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Haiku

# class UserAdmin(admin.ModelAdmin):
#     model = User

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Haiku)