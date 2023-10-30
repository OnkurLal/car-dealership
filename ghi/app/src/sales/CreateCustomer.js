import React, { useState } from "react";

const CreateCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.address = address;
    data.phone_number = phoneNumber;

    const url = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();
    }

    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className=" mb-3 text-white">Add a Customer</h1>
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
                  onChange={handleAddressChange}
                  placeholder="Address"
                  required
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={address}
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
                  required
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  value={phoneNumber}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
