import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiEventosId, agregarEventos } from "../api/apiEventos";


export const EventosPorId = () => {
  const [evento, setEvento] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewEventos = async () => {
    const getEvento = await apiEventosId(id);
    setEvento(getEvento);
  };

  useEffect(() => {
    viewEventos();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addEventos = await agregarEventos(id);
    navigate(`/reservacion`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="card col-6 mb-3 mt-5">
          <div className="row g-0">
            <div className="col-md-12">
              <img
                src={evento.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <p className="card-title">Nombre Evento: {evento.nombre}</p>
                <p>
                  Fecha Inicio:{" "}
                  {evento.fecha
                    ? evento.fecha.substring(0, 10)
                    : ""}
                </p>
                <p>Precio: Q{evento.precio} c/u</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search-container col-6">
          <form className="formReserva2" onSubmit={handleSearch}>
            <div className="submit-box">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Reservar
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};