import { useEffect, useState } from "react";

const SaleHistory = () => {
  const [salespeople, setSalespeople] = useState([]);
  const [salesperson, setSalesperson] = useState("");
  const [sales, setSales] = useState([]);

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };
  const getSalespeople = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const getSales = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const salespersonSales = data.sales.filter(
        (sale) => sale.salesperson.id === Number(salesperson)
      );
      setSales(salespersonSales);
    }
  };

  useEffect(() => {
    getSales();
    getSalespeople();
  }, [salesperson]);
  return (
    <>
      <h1 className="my-3 text-white">Salesperson History</h1>
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
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SaleHistory;
