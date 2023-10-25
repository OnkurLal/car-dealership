import React, { useState } from "react";

const CreateTechnicianForm = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [employee_id, setEmployee_id] = useState("");

  const handleFirst_NameChange = (event) => {
    const value = event.target.value;
    setFirst_Name(value);
  };
  const handleLast_NameChange = (event) => {
    const value = event.target.value;
    setLast_Name(value);
  };
  const handleEmployee_idChange = (event) => {
    const value = event.target.value;
    setEmployee_id(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = first_name;
    data.last_name = last_name;
    data.employee_id = employee_id;

    const url = `http://localhost:8080/api/technicians/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
    }

    setFirst_Name("");
    setLast_Name("");
    setEmployee_id("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleFirst_NameChange}
                  placeholder="First Name"
                  required
                  type="text"
                  id=" first name"
                  name="first name"
                  className="form-control"
                  value={first_name}
                />
                <label htmlFor="first name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleLast_NameChange}
                  placeholder="Last Name"
                  required
                  type="text"
                  id="last name"
                  name="last name"
                  className="form-control"
                  value={last_name}
                />
                <label htmlFor="last name">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={handleEmployee_idChange}
                  placeholder="Employee id"
                  required
                  type="text"
                  id="employee id"
                  name="employee id"
                  className="form-control"
                  value={employee_id}
                />
                <label htmlFor="employee id">Employee ID</label>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTechnicianForm;
