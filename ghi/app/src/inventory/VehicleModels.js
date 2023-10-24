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
      <h1 className="my-3">Vehicle Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img src={model.picture_url} alt="image of car" width = "100" height= "75" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default VehicleModel;
