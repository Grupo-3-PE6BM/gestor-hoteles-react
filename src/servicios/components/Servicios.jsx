import React, { useState, useEffect } from "react";
import { apiServicios } from "../api/apiServicios";
import { useNavigate, useParams } from "react-router-dom";

export const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const data = await apiServicios();
        setServicios(data.listaServicio[1]);
      } catch (error) {
        setError(error);
      }
    };
    fetchServicios();
  }, []);

  useEffect(() => {
    console.log("Servicios actualizados:", servicios);
  }, [servicios]);

  if (error) {
    return <div>Hubo un error al cargar los servicios: {error.message}</div>;
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Servi<span className="highlight">cios</span>
          </h2>
          <p className="intro">Listado de Servicios</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      <div className="container mt-4 mb-5">
        {servicios.map((servicio) => (
          <div className="col-md-12" key={servicio._id}>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img
                  src={servicio.img[0]}
                  className="img-fluid w-100"
                  alt={servicio.nombre}
                />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0">
                    <strong>{servicio.nombre}</strong>
                  </h4>
                  <p className="text-secondary">
                    <strong>{servicio.hotel.nombre}</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">
                      {servicio.disponibilidad ? "Disponible" : "No disponible"}
                    </li>
                  </ul>
                  <p>{servicio.descripcion}</p>
                  <p>
                    Precio: ${servicio.precio} -{" "}
                    <a className="btn btn-warning ms-1" href={`/servicioID?id=${servicio._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/servicioID/${servicio._id}`);
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
