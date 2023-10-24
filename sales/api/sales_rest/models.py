from django.db import models
from django.urls import reverse


# Create your models here.
class Salesperson(models.Model):
    first_name =  models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length= 50)

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"id": self.id})

class Customer(models.Model):
    first_name =  models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length= 200)
    phone_number = models.CharField(max_length=12)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"id": self.id})


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_automobileVO", kwargs={"vin": self.vin})

class Sale(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name='sales', on_delete=models.CASCADE)
    salesperson = models.ForeignKey(Salesperson, related_name='sales', on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, related_name='sales', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def get_api_url(self):
        return reverse("api_sale", kwargs={"id": self.id})
