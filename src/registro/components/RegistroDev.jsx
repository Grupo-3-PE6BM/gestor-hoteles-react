import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre de la persona es requerido"),
    correo: Yup.string()
      .required("El correo del usuario es requerido"),
  });

export const formOptions = { resolver: yupResolver(formSchema) };

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export const RegisterDev = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/usuarios/agregarDev",
        {
          nombre,
          correo,
          password,
        }
      );

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Te has registrado correctamente",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/login";
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: error.response.data.message,
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
            >
              Registro de Usuario
            </h3>

            <form onSubmit={handleSubmit}>
              <MDBInput
                type="text"
                wrapperClass="mb-4 mx-5 w-100"
                label="Nombre"
                placeholder="Tu nombre"
                id="nombre"
                size="lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <MDBInput
                type="email"
                wrapperClass="mb-4 mx-5 w-100"
                label="Correo electrónico"
                placeholder="Tu dirección de correo"
                id="correo"
                size="lg"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />

              <MDBInput
                type="password"
                wrapperClass="mb-4 mx-5 w-100"
                label="Contraseña"
                size="lg"
                id="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
              >
                Registrarse
              </Button>

              <p className="ms-5">
                ¿Ya tienes una cuenta?{" "}
                <a href="/login" className="link-info">
                  Iniciar sesión
                </a>
              </p>
            </form>
          </div>
        </MDBCol>

        <MDBCol
          sm="6"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="https://images.unsplash.com/photo-1552564835-07e1379e9708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"
            id="imagen-registro"
            alt="inn-sight-image"
            className="w-100"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterDev;