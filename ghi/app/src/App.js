import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import Manufacturers from "./inventory/Manufacturers";
import ManufacturerForm from "./inventory/CreateManufacturer";
import AutomobileForm from "./inventory/CreateAutomobiles";
import Automobiles from "./inventory/Automobiles";
import VehicleModel from "./inventory/VehicleModels";
import CreateVehicleModel from "./inventory/CreateVechicleModel";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
