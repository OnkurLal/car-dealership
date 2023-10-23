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
  }, [manufacturers]);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => {
            return (
              <tr key={manufacturer.name}>
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
