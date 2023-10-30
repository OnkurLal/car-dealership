import { useState, useEffect } from "react";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);

  const loadManufacturers = async () => {
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    loadManufacturers();
  }, []);

  return (
    <>
      <h1 className="my-3 text-white">Manufacturers</h1>
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Manufacturers;
