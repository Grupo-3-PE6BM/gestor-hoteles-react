import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiReservacion } from "../api/apiReservacion";
import { easing } from "@mui/material";

export const Reservacion = () => {
  const [reservacion, setReservacion] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [totalR, setTotalR] = useState(0);
  const navigate = useNavigate();

  const viewReservacion = async () => {
    const getReservaFromApi = await apiReservacion();
    setReservacion(getReservaFromApi);
    setEventos(getReservaFromApi.evento);
    setHabitaciones(getReservaFromApi.habitacion);
    setServicios(getReservaFromApi.servicio);
    setUsuario(getReservaFromApi.usuario);
  };

  useEffect(() => {
    viewReservacion();
  }, []);

  useEffect(() => {
    let totalInicial = 0;
    habitaciones.forEach((h) => {
      totalInicial += h.costo;
    });
    servicios.forEach((s) => {
      totalInicial += s.precio;
    });
    eventos.forEach((e) => {
      totalInicial += e.precio;
    });

    setTotalR(totalInicial);
  }, [habitaciones, servicios, eventos]);

  return (
    <>
        <section id="promo" className="promo section offset-header">
          <div className="container text-center">
            <h2 className="title">
              Reserva<span className="highlight">ciones</span>
            </h2>
            <p className="intro">Aqui encontraras tus reservaciones</p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>
      <div className="container">
        {habitaciones.length > 0 ? (
          <div className="px-4 px-lg-0">
            <div className="container text-white py-5 text-center"></div>
            {habitaciones.map((h) => (
              <div className="pb-5" key={h._id}>
                <div className="container">
                  <h2>Habitaciones</h2>
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">
                                  Habitacion
                                </div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Precio
                                </div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Dia Llegada
                                </div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Dia Salida
                                </div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  # de Huespedes
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src={h.img}
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  ></img>
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="#"
                                        className="text-dark d-inline-block"
                                      >
                                        {h.numero}
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic">
                                      {h.descripcion}
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>$. {h.costo}.00</strong>
                              </td>
                              <td className="align-middle">
                                <strong>
                                  {reservacion.dia_llegada &&
                                    new Date(
                                      reservacion.dia_llegada
                                    ).toLocaleDateString()}
                                </strong>
                              </td>
                              <td className="align-middle">
                                {reservacion.dia_salida &&
                                  new Date(
                                    reservacion.dia_salida
                                  ).toLocaleDateString()}
                              </td>
                              <td className="align-middle">
                                {reservacion.numero_de_huespedes} Huespedes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay Habitacion</p>
        )}

        {eventos.length > 0 ? (
          <div className="px-4 px-lg-0">
            <div className="container text-white py-5 text-center"></div>
            {eventos.map((e) => (
              <div className="pb-5" key={e._id}>
                <div className="container">
                  <h2>Eventos</h2>
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">
                                  Nombre
                                </div>
                              </th>

                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Tipo de Evento
                                </div>
                              </th>

                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Fecha</div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Precio
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src={e.img}
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  ></img>
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="#"
                                        className="text-dark d-inline-block"
                                      >
                                        {e.nombre}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>{e.tipo}</strong>
                              </td>
                              <td className="align-middle">
                                <strong>
                                  {" "}
                                  {new Date(e.fecha).toLocaleDateString()}
                                </strong>
                              </td>
                              <td className="align-middle">
                                <strong>$. {e.precio}.00</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay Eventos</p>
        )}
        {servicios.length > 0 ? (
          <div className="px-4 px-lg-0">
            <div className="container text-white py-5 text-center"></div>
            {servicios.map((s) => (
              <div className="pb-5" key={s._id}>
                <div className="container">
                  <h2>Servicios</h2>
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">
                                  Nombre
                                </div>
                              </th>

                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Descripcion
                                </div>
                              </th>

                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">
                                  Precio Servicio
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src={s.img}
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  ></img>
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a
                                        href="#"
                                        className="text-dark d-inline-block"
                                      >
                                        {s.nombre}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>{s.descripcion}</strong>
                              </td>
                              <td className="align-middle">
                                <strong>$. {s.precio}.00</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay Servicios en la reserva</p>
        )}

        <div className="col-lg-12">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Total de reservaciones{" "}
          </div>
          <div className="p-4">
            <p className="font-italic mb-4">
              Este es el total a pagar de su reservacion
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">$. {reservacion.total}</h5>
              </li>
            </ul>
            <a href="" className="btn btn-dark rounded-pill py-2 btn-block">
              Finalizar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
