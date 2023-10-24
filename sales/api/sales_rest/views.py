from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import CustomerEncoder, SalespersonEncoder, SaleEncoder
from .models import Salesperson, Sale, Customer, AutomobileVO

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                {"salesperson": salesperson},
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesperson, please try again."}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_salesperson(request, id):
    try:
        salesperson = Salesperson.objects.get(id=id)
        salesperson.delete()
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,            )
    except Salesperson.DoesNotExist:
        return JsonResponse({"message": "Salesperson does not exist, please try again."})


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create customer, please try again."}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
        customer.delete()
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Customer does not exist, please try again."}
        )

@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            vin = content['automobile']
            automobile = AutomobileVO.objects.get(vin=vin)
            content['automobile'] = automobile
            salesperson_id = content['salesperson']
            salesperson = Salesperson.objects.get(id=salesperson_id)
            content['salesperson'] = salesperson
            customer_id = content['customer']
            customer = Customer.objects.get(id=customer_id)
            content['customer'] = customer
            sale = Sale.objects.create(**content)
            return JsonResponse(
                {"sale": sale},
                encoder=SaleEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create sale, please try again."}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_sale(request, id):
    try:
        sale = Sale.objects.get(id=id)
        sale.delete()
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
    except Sale.DoesNotExist:
        return JsonResponse(
            {"message": "Sale does not exist, please try again."}
        )
