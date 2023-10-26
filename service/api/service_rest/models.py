from django.db import models

# Create your models here.


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50)
    sold = models.BooleanField()


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=100)
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    status = models.CharField(max_length=10, default="CREATED")

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def finish(self):
        self.status = "finished"
        self.save()

    def canceled(self):
        self.status = "canceled"
        self.save()
