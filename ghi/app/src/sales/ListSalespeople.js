import React, { useEffect, useState } from "react";

const ListSalespeople = () => {
  const [salespeople, setSalespeople] = useState([]);

  const getSalespeople = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  useEffect(() => {
    getSalespeople();
  }, []);

  return (
    <>
      <h1 className="my-3">Salespeople</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employe Id</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map((salesperson) => {
            return (
              <tr key={salesperson.id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name}</td>
                <td>{salesperson.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListSalespeople;
