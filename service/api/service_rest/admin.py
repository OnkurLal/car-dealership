from django.contrib import admin

# Register your models here.

from .models import Status


@admin.register(Status)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ["name", "id"]
