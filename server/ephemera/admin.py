from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Haiku, Classic


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Haiku)
admin.site.register(Classic)