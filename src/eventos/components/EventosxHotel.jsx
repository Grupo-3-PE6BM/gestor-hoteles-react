import React, { useEffect, useState } from "react";
import { apiEventosDeHotel  } from "../api/apiEventos";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { Evento } from "../models/evento";
import { useNavigate } from "react-router-dom";

export const ListaEventosDeHotel = () => {
  const [listEventos, setListEvento] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [evento, setEvento] = useState(Evento);
  const [habitaciones, setHabitaciones] = useState([]);

  const { hotelId } = useParams();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleOpenModal = (u) => {
    setShowModal(true);
    setEvento(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const listEventoHotelView = async () => {
    try {
      if (hotelId) {
        const eventoList = await apiEventosDeHotel(hotelId);
        setListEvento(eventoList);
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "No se pudieron cargar las habitaciones del hotel",
        "error"
      );
    }
  };

  useEffect(() => {
    listEventoHotelView();
  }, [showModal]);

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Habitaci<span className="highlight">ones</span>
          </h2>
          <p className="intro">Listado de Habitaciones</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        {listEventos.map((evento) => (
          <div className="col-md-12" key={evento._id}>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img
                  src={evento.img[0]}
                  className="img-fluid w-100 card-img"
                  alt={evento.nombre}
                />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0">
                    <strong>{evento.nombre}</strong>
                  </h4>
                  <p className="text-secondary">
                    <strong>
                      {new Date(evento.fecha).toLocaleDateString()} -{" "}
                      {evento.hotel.nombre}
                    </strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">
                      {new Date(evento.fecha).toLocaleDateString()}{" "}
                      <span>|</span>
                    </li>
                    <li className="list-inline-item">
                      {evento.disponibilidad ? "Disponible" : "No disponible"}
                    </li>
                  </ul>
                  <p>{evento.descripcion}</p>
                  <p>
                    Precio: ${evento.precio} -
                    <a className="btn btn-warning ms-1" href={`/eventoID?id=${evento._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/eventoID/${evento._id}`);
                    }}> 
                    Reservar 
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
