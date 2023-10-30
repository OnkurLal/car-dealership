import React, { useEffect, useState } from "react";

function CreateAppointmentForm() {
  const [vin, setVin] = useState("");
  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [technician, setTechnician] = useState("");
  const [technicians, setTechnicians] = useState([]);
  const [reason, setReason] = useState("");

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };
  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  };
  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  };
  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.vin = vin;
    data.customer = customer;
    data.date_time = `${date} ${time}`;
    data.technician = technician;
    data.reason = reason;

    const serviceUrl = `http://localhost:8080/api/appointments/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      header: {
        "Content-type": "application/json",
      },
    };
    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      const newService = await response.json();
    }

    setVin("");
    setTime("");
    setDate("");
    setCustomer("");
    setReason("");
    setTechnician("");
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className=" mb-3 text-white">Create a Service Appointment</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleVinChange}
                  placeholder="Vin"
                  required
                  type="text"
                  id="vin"
                  name="vin"
                  className="form-control"
                  value={vin}
                />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleDateChange}
                  placeholder="Date"
                  required
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  value={date}
                />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleTimeChange}
                  placeholder="Time"
                  required
                  type="time"
                  id="time"
                  name="time"
                  className="form-control"
                  value={time}
                />
                <label htmlFor="time">Time</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleCustomerChange}
                  placeholder="Customer"
                  required
                  type="text"
                  id="customer"
                  name="customer"
                  className="form-control"
                  value={customer}
                />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleReasonChange}
                  placeholder="Reason"
                  required
                  type="text"
                  id="reason"
                  name="reason"
                  className="form-control"
                  value={reason}
                />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleTechnicianChange}
                  required
                  id="technician"
                  name="technician"
                  className="form-select"
                  value={technician}
                >
                  <option value="">Choose a technician</option>
                  {technicians.map((technician) => {
                    return (
                      <option key={technician.id} value={technician.id}>
                        {technician.first_name} {technician.last_name}
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
export default CreateAppointmentForm;
