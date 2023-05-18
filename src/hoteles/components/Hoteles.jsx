import React, { useState, useEffect } from "react";
import { apiHotel } from "../api/apiHotel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

export const Hoteles = () => {
  const [hoteles, setHoteles] = useState([]);
  const [error, setError] = useState(null);
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const data = await apiHotel();
        setHoteles(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchHoteles();
  }, []);

  useEffect(() => {
    console.log("Hoteles READ:", hoteles);
  }, [hoteles]);

  if (error) {
    return <div>Hubo un error al cargar los hoteles: {error.message}</div>;
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Hote<span className="highlight">les</span>
          </h2>
          <p className="intro">Listado de Hoteles</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      <div className="container">

      <div className="container mt-4 mb-5">
        {hoteles.map((hotel) => (
          <div className="col-md-12" key={hotel._id}>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img
                  src={hotel.img}
                  className="img-fluid w-100 card-img"
                  alt={hotel.nombre}
                  />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0">
                    <strong>{hotel.nombre}</strong>
                  </h4>
                  <p className="text-secondary">
                    <strong>Direccion: {hotel.direccion}</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">
                      <strong>Telefono: </strong>
                      {hotel.telefono}
                    </li>
                  </ul>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">
                      <strong>Valoracion: </strong>
                      {hotel.valoracion} Estrellas
                    </li>
                  </ul>
                  <br />

                  <button className="btn btn-primary" id="tito">  
                    <Link to={`/habPorHotel/${hotel._id}`} className="nav-link">
                      Habitaciones
                    </Link>
                  </button>

                  <button className="btn btn-primary" id="tito">  
                    <Link to={`/evePorHotel/${hotel._id}`} className="nav-link">
                      Eventos
                    </Link>
                  </button>
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
