# CarCar

Team:

- Onkur - Which microservice? Sales
- Micheal - Which microservice? Service

## Design

![diagram of CarCar application](Beta_Diagram.png)

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

With in the sales microservice there will be four models including Salesperson, Customer, Sale, and Sale. The model for the Salesperson will include the following fields: first_name, last_name, employee_id. The Customer model will include the following fields: first_name, last_name, address, and phone_number. The Sale model will include the following fields: automobile, salesperson, customer and price. All of the fields will be a foreign key on this model except the price field. The AutomobileVO model will have vin and sold (booloean) as fields. The Sales microservice will be polling the Inventory service to get the a list of automobiles every 60 seconds.

Also in the Sales microservice there will be the poller. In the poller there will be an automobileVO model as well. The poller will reach out to the inventory api at `http://inventory-api:8000/api/automobiles/` to get the current list of automobiles. Each of the automobiles will then have an instance created in the sales api.

The sales api will have the following routes:

- `http://localhost:8090/api/salespeople/` This route is used to get the list of all salespeople using a `GET` request and create a new sales person using a `POST` request.
- `http://localhost:8090/api/salespeople/:id/` This route is used to delete a specific salesperson using a `DELETE` request.
- `http://localhost:8090/api/customers/` This route is used to get the list of all customers using a `GET` request and create a new customer using a `POST` request.
- `http://localhost:8090/api/customers/:id/` This route is used to delete a specific customer using a `DELETE` request.
- `http://localhost:8090/api/sales/` This route is used to get the list of all sales using a `GET` request and create a new sale using a `POST` request.
- `http://localhost:8090/api/sales/:id/` This route is used to delete a specific sale using a `DELETE` request.
