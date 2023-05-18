import React, { useState, useEffect } from "react";
import { apiEventos } from "../api/apiEventos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate, useParams } from "react-router-dom";

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const data = await apiEventos();
        setEventos(data.listaEventos[1]);
      } catch (error) {
        setError(error);
      }
    };
    fetchEventos();
  }, []);

  useEffect(() => {
    console.log("Eventos actualizados:", eventos);
  }, [eventos]);

  if (error) {
    return <div>Hubo un error al cargar los eventos: {error.message}</div>;
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Even<span className="highlight">tos</span>
          </h2>
          <p className="intro">Listado de eventos</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      <div className="container mt-4 mb-5">
        {eventos.map((evento) => (
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
