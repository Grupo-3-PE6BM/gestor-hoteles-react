import React, { useEffect, useState } from "react";
import { apiEliminarUsuarioById, apiUsuarioById } from "../api/apiUser";
import { UpdateProfile } from "./UpdateProfile";
var tokenId = localStorage.getItem("token");
export const Profile = () => {
  const [usuario, setUsuario] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const eliminarUser = async () => {
    await apiEliminarUsuarioById(tokenId);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const viewCliente = async () => {
    const getCliente = await apiUsuarioById(tokenId);
    setUsuario(getCliente);
  };

  useEffect(() => {
    viewCliente();
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Mi <span className="highlight">Usuario</span>
          </h2>
          <p className="intro">Aqui encontraras toda la informacion relacionada con tu usuario</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="card mb-3 mt-4" key={usuario._id} style={{ border: "3px solid black" }} id="card">

        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p>
                <strong>Nombre:</strong> {usuario.nombre}
              </p>
              <p>
                <strong>Password:</strong> {usuario.password}
              </p>
              <p>
                <strong>Correo:</strong> {usuario.correo}
              </p>
              <p>
                <strong>Rol:</strong> {usuario.rol}
              </p>
            </div>
            <div className="card-footer">
              <a className="btn btn-warning" onClick={() => handleOpenModal()}>
                Editar
              </a>
              <a className="btn btn-danger" onClick={eliminarUser}>
                Eliminar
              </a>
            </div>
          </div>
        </div>
      </div>

      <UpdateProfile
        profileEdit={usuario}
        isOpen={showModal}
        onClose={() => handleCloseModal()}
      ></UpdateProfile>
    </>
  );
};
