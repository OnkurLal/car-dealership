import { useState, useEffect } from "react";

const ListSales = () => {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    getSales();
  }, []);
  return (
    <>
      <h1 className="my-3 text-white">Sales</h1>
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>Salesperson Employee Id</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.salesperson.employee_id}</td>
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

export default ListSales;
