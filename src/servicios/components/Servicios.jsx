import React, { useState, useEffect } from 'react';
import Servicio from './ListServicios';
import { apiServicios } from '../api/apiServicios';

export const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState(null);

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
        { servicios.map((servicio) => (
          <Servicio key={servicio._id} servicio={servicio} />
        ))}
      </div>
    </>
  );
};