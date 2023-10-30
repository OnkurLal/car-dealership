import React, { useEffect, useState } from "react";

const Automobiles = () => {
  const [automobiles, setAutomobiles] = useState([]);

  const loadAutomobiles = async () => {
    const response = await fetch("http://localhost:8100/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  };
  useEffect(() => {
    loadAutomobiles();
  }, []);

  return (
    <>
      <h1 className="my-3 text-white">Automobiles</h1>
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map((automobile) => {
            return (
              <tr key={automobile.id}>
                <td>{automobile.vin}</td>
                <td>{automobile.color}</td>
                <td>{automobile.year}</td>
                <td>{automobile.model.name}</td>
                <td>{automobile.model.manufacturer.name}</td>
                <td>{automobile.sold ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Automobiles;
