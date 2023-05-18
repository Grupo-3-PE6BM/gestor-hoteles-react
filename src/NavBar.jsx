import React from "react";
import { isUserAuthenticated } from "../src/login/helpers/loginHelper";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export const NavBar = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>

        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                id="logo"
                src="src\assets\images\llave-del-cuarto.png"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Inn Sight
            </Link>

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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-item-active" to="/hoteles">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Hoteles
                    </a>
                  </li>
                </Link>

                <Link className="nav-item-active" to="/servicios">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Servicios
                    </a>
                  </li>
                </Link>

                <Link className="nav-item-active" to="/eventos">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Eventos
                    </a>
                  </li>
                </Link>

                <Link className="nav-item-active" to="/habitaciones">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Habitaciones
                    </a>
                  </li>
                </Link>

                <Link className="nav-item-active" to="/reservacion">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Reservacion
                    </a>
                  </li>
                </Link>

                <Link className="nav-item-active" to="/buscar">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Buscar
                    </a>
                  </li>
                </Link>

              </ul>

              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  Perfil
                </button>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="btn btn-second ">
                      <Link className="nav-item-active" to="/perfil">
                        Mi Perfil
                      </Link>
                    </button>
                  </li>

                  <li>
                    <button className="btn btn-second ">
                      <Link className="nav-item-active" to="/login">
                        Iniciar Sesion
                      </Link>
                    </button>
                  </li>



                  <li>
                    {localStorage.getItem("token") && (
                      <form className="w-25">
                        <Link
                          aria-current="page"
                          to="/"
                          onClick={() => logOut()}
                        >
                          <Button
                            color="warning"
                            aria-current="page"
                            to="/"
                            onClick={() => logOut()}
                          >
                            Cerrar Sesion{" "}
                          </Button>
                        </Link>
                      </form>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    
    </>
  );
};
