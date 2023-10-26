from django.db import models

# Create your models here.


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50)
    sold = models.BooleanField()


class Status(models.Model):
    name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("id",)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=100)
    vin = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
        default=3,
    )

    def finish(self):
        status = Status.objects.get(name="FINISHED")
        self.status = status
        self.save()

    def canceled(self):
        status = Status.objects.get(name="CANCELLED")
        self.status = status
        self.save()
