import React, { useEffect, useState } from "react";

function ListTechnicians() {
  const [technicians, setTechnicians] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="my-3 text-white">Technicians</h1>
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician) => {
            return (
              <tr key={technician.id}>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
                <td>{technician.employee_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListTechnicians;
