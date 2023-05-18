import React, { useState, useEffect } from 'react';
import Evento from './ListaEventos';
import { apiEventos } from '../api/apiEventos';

export const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState(null);

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
        { eventos.map((evento) => (
          <Evento key={evento._id} evento={evento} />
        ))}
      </div>
    </>
  );
};
