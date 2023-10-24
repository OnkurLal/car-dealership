from django.contrib import admin
from django.urls import path, include
from .views import (
    api_technician,
    api_technicians,
    api_appointment,
    api_appointments,
    api_finished_appointment,
    api_canceled_appointment,
)

urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:id>/", api_technician, name="api_technician"),
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:id>/", api_appointment, name="api_appointment"),
    path(
        "appointments/<int:id>/finish/",
        api_finished_appointment,
        name="api_finished_appointment",
    ),
    path(
        "appointments/<int:id>/cancel/",
        api_canceled_appointment,
        name="api_canceled_appointment",
    ),
]
