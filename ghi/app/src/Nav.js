import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white ps-2 fs-3" id="logo" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </NavLink>
              <ul className="dropdown-menu opacity-50 ">
                <li>
                  <Link className="dropdown-item " to="/manufacturers">
                    Manufacturers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/manufacturers/new">
                    Create a Manufacturer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/models">
                    Models
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/models/new">
                    Create a Vehicle Model
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/automobiles">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/automobiles/new">
                    Create an Automobile
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </NavLink>
              <ul className="dropdown-menu opacity-50">
                <li>
                  <Link className="dropdown-item" to="/salespeople">
                    Salespeople
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/salespeople/new">
                    Add a Salesperson
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers/new">
                    Add a Customer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/new">
                    Add a Sale
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/history">
                    Sales History
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown px-5">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </NavLink>
              <ul className="dropdown-menu opacity-50">
                <li>
                  <Link className="dropdown-item" to="/technicians">
                    Technicians
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technicians/new">
                    Add a Technician
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/appointments">
                    Service Appointments
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointments/new">
                    Create an Appointment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointments/history">
                    Service history
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
