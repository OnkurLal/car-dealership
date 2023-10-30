import { useEffect, useState } from "react";

const CreateSale = () => {
  const [price, setPrice] = useState("");
  const [vin, setVin] = useState("");
  const [vins, setVins] = useState([]);
  const [salesperson, setSalesperson] = useState("");
  const [salespeople, setSalespeople] = useState([]);
  const [customer, setCustomer] = useState("");
  const [customers, setCustomers] = useState([]);

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const getVins = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const unsold = data.autos.filter((auto) => auto.sold === false);
      setVins(unsold);
    }
  };

  const getSalespeople = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const getCustomers = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.automobile = vin;
    data.salesperson = salesperson;
    data.customer = customer;
    data.price = price;

    const salesUrl = "http://localhost:8090/api/sales/";
    const salesFetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const salesResponse = await fetch(salesUrl, salesFetchConfig);
    if (salesResponse.ok) {
      const newSale = await salesResponse.json();
    }

    const automobileUrl = `http://localhost:8100/api/automobiles/${vin}/`;
    const sold = { sold: true };
    const automobileFetchConfig = {
      method: "put",
      body: JSON.stringify(sold),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const soldResponse = await fetch(automobileUrl, automobileFetchConfig);
    getVins();
    setVin("");
    setCustomer("");
    setSalesperson("");
    setPrice("");
  };

  useEffect(() => {
    getVins();
    getSalespeople();
    getCustomers();
  }, []);

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className=" mb-3 text-white">Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="mb-3">
                <select
                  onChange={handleVinChange}
                  required
                  id="vin"
                  name="vin"
                  className="form-select"
                  value={vin}
                >
                  <option value="">Choose an automobile VIN</option>
                  {vins.map((auto) => {
                    return (
                      <option key={auto.vin} value={auto.vin}>
                        {auto.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleSalespersonChange}
                  required
                  id="salesperson"
                  name="salesperson"
                  className="form-select"
                  value={salesperson}
                >
                  <option value="">Choose a saleperson</option>
                  {salespeople.map((person) => {
                    return (
                      <option key={person.id} value={person.id}>
                        {person.first_name} {person.last_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleCustomerChange}
                  required
                  id="customer"
                  name="customer"
                  className="form-select"
                  value={customer}
                >
                  <option value="">Choose a Customer</option>
                  {customers.map((person) => {
                    return (
                      <option key={person.id} value={person.id}>
                        {person.first_name} {person.last_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handlePriceChange}
                  placeholder="Price"
                  required
                  type="number"
                  min="0"
                  step=".01"
                  id="price"
                  name="price"
                  className="form-control"
                  value={price}
                />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSale;
