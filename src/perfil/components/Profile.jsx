import React, { useEffect, useState } from "react";
import { apiEliminarUsuarioById, apiUsuarioById } from "../api/apiUser";
import { UpdateProfile } from "./UpdateProfile";
import { useNavigate } from "react-router-dom";
import { apiReservacion } from "../../reservacion/api/apiReservacion";

var tokenId = localStorage.getItem("token");
export const Profile = () => {
  const [usuario, setUsuario] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [reservacion, setReservacion] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  console.log(reservacion.habitacion);
  const [servicios, setServicios] = useState([]);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();
  var tokenId = localStorage.getItem("token");

  const eliminarUser = async () => {
    await apiEliminarUsuarioById(tokenId);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const viewReservacion = async () => {
    const getReservacion = await apiReservacion();
    setReservacion(getReservacion);
    setHabitaciones(getReservacion.habitacion);
    setServicios(getReservacion.servicio);
    setEventos(getReservacion.evento);
  };

  useEffect(() => {
    viewReservacion();
  }, [showModal]);

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
                      src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                      className="avatar"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="col-sm-12 d-flex justify-content-center align-items-center">
                  <div className="details text-center">
                    <img
                      src={usuario.nombre}
                      className="img-fluid rounded-circle"
                      alt=""
                      style={{ width: "150px", marginBottom: "20px" }}
                    />
                    <h3>
                      Nombre: {usuario.nombre} <i className="fa fa-shield"></i>
                    </h3>
                    <div>
                      <strong>CORREO:</strong> {usuario.correo}
                    </div>
                    <div>
                      <strong>ROL:</strong> {usuario.rol}
                    </div>
                    <div className="mt-3">
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
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="tit"
                      >
                        Reservaciones
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Mis reservaciones
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="tite"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div className="card-body">
                                <div className="details">
                                  <h3>
                                    Información de las reservaciones:
                                    <i className="fa fa-sheild"></i>
                                  </h3>
                                  <div>
                                    <h6>
                                      No. de reservacion: {reservacion._id}
                                    </h6>
                                  </div>

                                  <div>
                                    <h6>
                                      Cantidad de personas:{" "}
                                      {reservacion.numero_de_huespedes}
                                    </h6>
                                  </div>

                                  <div>
                                    <h6>
                                      Fecha de Inicio:{" "}
                                      {new Date(
                                        reservacion.dia_llegada
                                      ).toLocaleDateString()}
                                    </h6>
                                  </div>

                                  <div>
                                    <h6>
                                      Fecha de finalización:{" "}
                                      {new Date(
                                        reservacion.dia_salida
                                      ).toLocaleDateString()}
                                    </h6>
                                  </div>
                                  <br />
                                  <div>
                                    <h5>Habitaciones reservadas:</h5>
                                    {habitaciones.length > 0 ? (
                                      <ul>
                                        {habitaciones.map((h) => (
                                          <div
                                            key={h._id}
                                            className="container"
                                          >
                                            <div className="row g-0">
                                              <div className="col-md-4">
                                                <img
                                                  src={h.img}
                                                  className="img-fluid rounded-start"
                                                  alt="..."
                                                />
                                              </div>
                                              <div className="col-md-8">
                                                <div className="card-body">
                                                  <h5 className="card-title">
                                                    {h.tipo}
                                                  </h5>
                                                  <strong className="text-primary">
                                                    Numero de habitación:{" "}
                                                    {h.numero}
                                                  </strong>
                                                  <br />
                                                  <br />
                                                  <strong class="text-success">
                                                    Precio: {h.costo}
                                                  </strong>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p>
                                        No se han agregado habitaciones a la
                                        reserva.
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                               Reservaciones
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
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
