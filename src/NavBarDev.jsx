import React from 'react'
import { isSuperAdmin } from "../src/login/helpers/loginHelper";
import { Link } from "react-router-dom";

export const NavBarDev = () => {

  return (
    <>
      {isSuperAdmin() && (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          data-bs-theme="dark"
        >

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-item-active" to="/listaUsuarios">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Usuarios
                    </a>
                  </li>
                </Link>
               
                <Link className="nav-item-active" to="/grafica">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Grafica de hoteles
                    </a>
                  </li>
                </Link>
                </ul>
          </div>
        </nav>
      )}
    </>
  );
};
