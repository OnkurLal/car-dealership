import React, { useEffect, useState } from "react";

function ServiceHistory() {
  const [appointments, setAppointments] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  const [vin, setVin] = useState([]);
  const [filtered_appointments, setFilteredAppointments] = useState([]);

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const auto_url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    const auto_response = await fetch(auto_url);
    if (response.ok && auto_response.ok) {
      const data = await response.json();
      const auto_data = await auto_response.json();
      setAppointments(data.appointments);
      setFilteredAppointments(data.appointments);
      const inventory_vin = auto_data.autos.map((auto) => auto.vin);
      setAutomobiles(inventory_vin);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter_appointments = appointments.filter(
      (appointment) => appointment.vin === vin
    );
    setFilteredAppointments(filter_appointments);
    setVin("");
  };

  return (
    <>
      <h1 className="my-3 text-white">Service History</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            onChange={handleVinChange}
            placeholder="Search by Vin"
            required
            type="text"
            id="vin"
            name="vin"
            className="form-control"
            value={vin}
          />
          <label htmlFor="vin">Search by Vin</label>
          <button className="btn btn-secondary">Search</button>
        </div>
      </form>
      <table className="table table-striped table-dark opacity-75">
        <thead>
          <tr>
            <th>Vin</th>
            <th>is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered_appointments.map((appointment) => {
            const [dateStr, timeStr] = appointment.date_time.split("T");
            const dateObj = new Date(dateStr);
            const date = `${
              dateObj.getMonth() + 1
            }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
            const timeParts = timeStr.split(":");
            const hours = parseInt(timeParts[0]);
            const minutes = timeParts[1];
            const time = `${hours % 12}:${minutes}${hours < 12 ? "am" : "pm"}`;
            return (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>
                  {automobiles.indexOf(appointment.vin) > -1 ? "YES" : "NO"}
                </td>
                <td>{appointment.customer}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>
                  {appointment.technician.first_name}{" "}
                  {appointment.technician.last_name}
                </td>
                <td>{appointment.reason}</td>
                <td>{appointment.status}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ServiceHistory;
