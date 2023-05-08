import React from 'react';

const Servicio = ({ servicio }) => {
  return (
    <div className="col-md-12">
      <div className="row rounded bg-white mt-4">
        <div className="col-md-3 pl-0 pr-0">
          <img src={servicio.img[0]} className="img-fluid w-100" alt={servicio.nombre} />
        </div>
        <div className="col-md-9">
          <div className="card-block p-3">
            <h4 className="card-title mt-0"><strong>{servicio.nombre}</strong></h4>
            <p className="text-secondary">
              <strong>{servicio.hotel.nombre}</strong>
            </p>
            <ul className="list-inline mt-auto">
              <li className="list-inline-item">{servicio.disponibilidad ? 'Disponible' : 'No disponible'}</li>
            </ul>
            <p>{servicio.descripcion}</p>
            <p>Precio: ${servicio.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
