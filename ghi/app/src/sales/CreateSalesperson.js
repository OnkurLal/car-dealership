import React, { useState } from "react";

const CreateSalesperson = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmployeIdChange = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeId;

    const url = "http://localhost:8090/api/salespeople/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
    }

    setFirstName("");
    setLastName("");
    setEmployeeId("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Salesperson</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                  required
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleLastNameChange}
                  placeholder="Last Name"
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleEmployeIdChange}
                  placeholder="Employee ID"
                  required
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  className="form-control"
                  value={employeeId}
                />
                <label htmlFor="employeeId">Employee Id</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSalesperson;
