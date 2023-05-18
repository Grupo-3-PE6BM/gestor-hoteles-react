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
      <div className="section-wrapper">
        <div className="row"></div>
        <section id="promo" className="promo section offset-header">
          <div className="container text-center">
            <h2 className="title">
              Mi <span className="highlight">Usuario</span>
            </h2>
            <p className="intro">
              Aqui encontraras toda la informacion relacionada con tu usuario
            </p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10" key={usuario._id}>
            <div className="panel panel-white profile-widget">
              <div className="row">
                <div className="col-sm-12">
                  <div className="image-container bg2">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="avatar"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="details">
                    <h3>
                      {usuario.nombre} <i className="fa fa-sheild"></i>
                    </h3>
                    <div>
                      <strong>CORREO:</strong> {usuario.correo}
                    </div>

                    <div>
                      <strong>ROL:</strong> {usuario.rol}
                    </div>
                    <div className="mg-top-10">
                      <a
                        className="btn btn-warning"
                        id="boton"
                        onClick={() => handleOpenModal()}
                      >
                        Editar
                      </a>
                      <a
                        className="btn btn-danger"
                        id="boton"
                        style={{ marginLeft: "10px" }}
                        onClick={eliminarUser}
                      >
                        Eliminar
                      </a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
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
