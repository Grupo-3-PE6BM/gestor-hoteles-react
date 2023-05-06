import React from 'react';

const Evento = ({ evento }) => {
  return (
    <div className="col-md-12">
      <div className="row rounded bg-white mt-4">
        <div className="col-md-3 pl-0 pr-0">
          <img src={evento.img[0]} className="img-fluid w-100" alt={evento.nombre} />
        </div>
        <div className="col-md-9">
          <div className="card-block p-3">
            <h4 className="card-title mt-0"><strong>{evento.nombre}</strong></h4>
            <p className="text-secondary">
              <strong>{new Date(evento.fecha).toLocaleDateString()} - {evento.hotel.nombre}</strong>
            </p>
            <ul className="list-inline mt-auto">
              <li className="list-inline-item">{new Date(evento.fecha).toLocaleDateString()} <span>|</span></li>
              <li className="list-inline-item">{evento.disponibilidad ? 'Disponible' : 'No disponible'}</li>
            </ul>
            <p>{evento.descripcion}</p>
            <p>Precio: ${evento.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evento;
