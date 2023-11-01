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
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="container app-wrapper">
        <Nav />
        <div className="content">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="manufacturers" element={<Manufacturers />} />

            <Route path="manufacturers/new" element={<ManufacturerForm />} />

            <Route path="automobiles" element={<Automobiles />} />

            <Route path="automobiles/new" element={<AutomobileForm />} />

            <Route path="models" element={<VehicleModel />} />

            <Route path="models/new" element={<CreateVehicleModel />} />

            <Route path="appointments" element={<ListAppointments />} />

            <Route
              path="appointments/new"
              element={<CreateAppointmentForm />}
            />
            <Route path="appointments/history" element={<ServiceHistory />} />

            <Route path="technicians" element={<ListTechnicians />} />
            <Route path="technicians/new" element={<CreateTechnicianForm />} />
            <Route path="salespeople" element={<ListSalespeople />} />
            <Route path="salespeople/new" element={<CreateSalesperson />} />
            <Route path="customers" element={<ListCustomers />} />
            <Route path="customers/new" element={<CreateCustomer />} />
            <Route path="sales" element={<ListSales />} />
            <Route path="sales/new" element={<CreateSale />} />
            <Route path="sales/history" element={<SaleHistory />} />
          </Routes>
        </div>
        <footer className="mt-5">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
