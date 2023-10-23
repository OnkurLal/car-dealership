import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import Manufacturers from "./inventory/Manufacturers";
import ManufacturerForm from "./inventory/CreateManufacturer";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
