import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import Manufacturers from "./inventory/Manufacturers";
import ManufacturerForm from "./inventory/CreateManufacturer";
import AutomobileForm from "./inventory/CreateAutomobiles";
import Automobiles from "./inventory/Automobiles";
import VehicleModel from "./inventory/VehicleModels";
import CreateVehicleModel from "./inventory/CreateVechicleModel";
import ListSalespeople from "./sales/ListSalespeople";
import CreateSalesperson from "./sales/CreateSalesperson";
import ListCustomers from "./sales/ListCustomers";
import CreateCustomer from "./sales/CreateCustomer";
import ListSales from "./sales/ListSales";
import CreateSale from "./sales/CreateSale";
import SaleHistory from "./sales/SalesHistory";
import CreateAppointmentForm from "./service/createServiceForm";
import CreateTechnicianForm from "./service/createTechnicians";
import ListTechnicians from "./service/listTechnicians";
import ListAppointments from "./service/listAppointments";
import ServiceHistory from "./service/serviceHistory";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<Manufacturers />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<Automobiles />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="models">
            <Route index element={<VehicleModel />} />
            <Route path="new" element={<CreateVehicleModel />} />
          </Route>
          <Route path="appointments">
            <Route index element={<ListAppointments />} />
            <Route path="new" element={<CreateAppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="technicians">
          <Route index element={<ListTechnicians />} />
            <Route path="new" element={<CreateTechnicianForm />} />
          </Route>
          <Route path="salespeople">
            <Route index element={<ListSalespeople />} />
            <Route path="new" element={<CreateSalesperson />} />
          </Route>
          <Route path="customers">
            <Route index element={<ListCustomers />} />
            <Route path="new" element={<CreateCustomer />} />
          </Route>
          <Route path="sales">
            <Route index element={<ListSales />} />
            <Route path="new" element={<CreateSale />} />
            <Route path="history" element={<SaleHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
