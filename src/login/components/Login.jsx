import React, { useState } from "react";
import { apiLogin } from "../api/apiLogin";
import Swal from "sweetalert2";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export const Login = () => {
  //Manejo del state del email y password
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const result = await apiLogin(correo, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Usuario Verificado!",
        text: "Ha iniciado sesion correctamente",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <span id="title" className="h1 fw-bold mb-0">
              Inn Sight
            </span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mt-5 mb-3 ps-5 pb-3"
              style={{ letterSpacing: "0px" }}
              id="iniciar-sesion"
            >
              Iniciar Sesion
            </h3>

            <form onSubmit={handleLoginSubmit}>
              <MDBInput
                type="email"
                wrapperClass="mb-4 mx-5 w-100"
                label="Correo Electronico"
                placeholder="Tu direccion de correo"
                id="inemail"
                size="lg"
                aria-describedby="emailHelp"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />

              <MDBInput
                type="password"
                wrapperClass="mb-4 mx-5 w-100"
                className="form__field"
                label="Password"
                size="lg"
                id="inpassword"
                placeholder="Tu Password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
                required
              />

              <Button
                type="submit"
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
              >
                Iniciar Sesion
              </Button>

              <p className="ms-5">
                Aun no tienes una cuenta?{" "}
                <a href="/registro" class="link-info">
                  Registrate Aqui
                </a>
              </p>
            </form>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            id="imagen-login"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
