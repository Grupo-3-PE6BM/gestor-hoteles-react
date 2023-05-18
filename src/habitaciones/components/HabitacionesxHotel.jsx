import React, { useEffect, useState } from "react";
import { apiHabitacionesDeHotel } from "../api/apiHabitaciones";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { Habitacion } from "../models/habitacion";
import { useNavigate } from "react-router-dom";

export const ListaHabitacionesDeHotel = () => {
  const [listHabitaciones, setListHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [habitacion, setHabitacion] = useState(Habitacion);
  const [habitaciones, setHabitaciones] = useState([]);

  const { hotelId } = useParams();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleOpenModal = (u) => {
    setShowModal(true);
    setHabitacion(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const listHabitacionHotelView = async () => {
    try {
      if (hotelId) {
        const habitacionList = await apiHabitacionesDeHotel(hotelId);
        setListHabitaciones(habitacionList);
        console.log(habitacionList);
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
    listHabitacionHotelView();
  }, [showModal]);

  // console.log(listHoteles);
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

      <div className="container">
        <div className="container mt-4 mb-5">
          {listHabitaciones.map((habitacion) => (
            <div className="col-md-12" key={habitacion._id}>
              <div className="row rounded bg-white mt-4">
                <div className="col-md-3 pl-0 pr-0">
                  <img
                    src={habitacion.img}
                    className="img-fluid w-100 card-img"
                    alt={habitacion.numero}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-block p-3">
                    <h4 className="card-title mt-0">
                      <strong>HABITACION NO. {habitacion.numero}</strong>
                    </h4>
                    <p className="text-secondary">
                      <strong>{habitacion.hotel.nombre}</strong>
                    </p>
                    <ul className="list-inline mt-auto">
                      <li className="list-inline-item">
                        {habitacion.descripcion}
                      </li>
                    </ul>
                    <p>
                      <strong>
                        Disponibilidad:{" "}
                        {habitacion.disponibilidad
                          ? "Disponible"
                          : "No disponible"}
                      </strong>
                    </p>
                    <p>
                      <strong>Tipo: {habitacion.tipo_habitacion}</strong>
                    </p>

                    <p>
                      <strong>$. {habitacion.costo}</strong> -{" "}
                      <a
                        className="btn btn-warning ms-1"
                        href={`/habitacionID?id=${habitacion._id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          navigate(`/habitacionId/${habitacion._id}`);
                        }}
                      >
                        {" "}
                        Reservar{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
