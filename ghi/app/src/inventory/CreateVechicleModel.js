import React, { useEffect, useState } from "react";

function CreateVehicleModel() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [picture_url, setPictureURL] = useState("");
  const [manufacturers, setManufacturers] = useState([]);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleChangeManufacturer = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };
  const handleChangePictureURL = (event) => {
    const value = event.target.value;
    setPictureURL(value);
  };

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.manufacturer = manufacturer;
    data.name = name;
    data.picture_url = picture_url;

    const url = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel);
    }
    setManufacturer("");
    setName("");
    setPictureURL("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a Vehicle Model</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChangeName}
                  placeholder="Model Name"
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={name}
                />
                <label htmlFor="name">Model</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChangePictureURL}
                  placeholder="Picture Url"
                  required
                  type="text"
                  id="picture"
                  name="picture"
                  className="form-control"
                  value={picture_url}
                />
                <label htmlFor="Picture Url">picture Url</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleChangeManufacturer}
                  required
                  id="manufacturer"
                  name="manufacturer"
                  className="form-select"
                  value={manufacturer}
                >
                  <option value="manufacturer">Choose a manufacturer</option>
                  {manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateVehicleModel;
