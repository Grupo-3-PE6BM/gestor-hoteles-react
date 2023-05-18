import React from 'react'
import { isAdmin } from "../src/login/helpers/loginHelper";
import { Link } from "react-router-dom";

export const NavBarAdmin = () => {

  return (
    <>
      {isAdmin() && (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          data-bs-theme="dark"
        >

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-item-active" to="/listaReservaciones">
                  <li className="nav-item">
                    <a className="nav-link active" id="link">
                      Reservas
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
