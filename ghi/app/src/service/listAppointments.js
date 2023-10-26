import React, { useEffect, useState } from "react";

function ListAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  const handleCancelClick = async (event) => {
    const appointmentid = event.target.value;
    const url = `http://localhost:8080/api/appointments/${appointmentid}/cancel/`;
    const fetchConfig = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    fetchData();
  };

  const handleFinishClick = async (event) => {
    const appointmentid = event.target.value;
    const url = `http://localhost:8080/api/appointments/${appointmentid}/finish/`;
    const fetchConfig = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    fetchData();
  };
  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const auto_url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    const auto_response = await fetch(auto_url);
    if (response.ok && auto_response.ok) {
      const data = await response.json();
      const created_appointments = data.appointments.filter(
        (appointment) => appointment.status.name === "CREATED"
      );
      const auto_data = await auto_response.json();
      setAppointments(created_appointments);
      const inventory_vin = auto_data.autos.map((auto) => auto.vin);
      setAutomobiles(inventory_vin);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="my-3">Appointments</h1>
      <table className="table table-striped">
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
          {appointments.map((appointment) => {
            const [dateStr, timeStr] = appointment.date_time.split("T");
            const dateObj = new Date(dateStr);
            const date = `${
              dateObj.getMonth() + 1
            }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
            const timeParts = timeStr.split(":");
            const hours = parseInt(timeParts[0], 10);
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
                <td>
                  <button
                    value={appointment.id}
                    onClick={handleCancelClick}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    value={appointment.id}
                    onClick={handleFinishClick}
                    className="btn btn-success"
                  >
                    Finish
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListAppointments;
