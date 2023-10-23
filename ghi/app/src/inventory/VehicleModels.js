import React, { useEffect, useState } from "react";

function VehicleModel() {
  const [models, setModels] = useState([]);


  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
            <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => {
            return (
              <tr key={model.name}>
                <td>{model.name}</td>
                <td>{model.manufacturer}</td>
                <td>{model.picture_url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )

};

export default VehicleModel;
