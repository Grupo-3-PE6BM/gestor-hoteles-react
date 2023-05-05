import React from "react";
import { isUserAuthenticated } from "../src/login/helpers/loginHelper";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      {isUserAuthenticated() && (
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

                <Link className="nav-item-active" to='/hoteles'>
                <li className="nav-item">
                  <a className="nav-link active" id="link">
                    Hoteles
                  </a>
                </li>
                </Link>


                <Link className="nav-item-active" to='/servicios'>
                <li className="nav-item">
                  <a className="nav-link active" id="link">
                    Servicios
                  </a>
                </li>
                </Link>

                <Link className="nav-item-active" to='/eventos'>
                <li className="nav-item">
                  <a className="nav-link active" id="link">
                    Eventos
                  </a>
                </li>
                </Link>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-link">
                  <div id="demo-b" >
                    <input type="search" placeholder="Search" />
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                {localStorage.getItem("token") && (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      to="/login"
                      onClick={() => logOut()}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
