import React from 'react';

const Habitacion = ({ habitacion }) => {
    return (
        <div className="col-md-12">
            <div className="row rounded bg-white mt-4">
                <div className="col-md-3 pl-0 pr-0">
                    <img src={habitacion.img[0]} className="img-fluid w-100" alt={habitacion.nombre} />
                </div>
                <div className="col-md-9">
                    <div className="card-block p-3">
                        <h4 className="card-title mt-0"><strong>{habitacion.nombre}</strong></h4>
                        <p className="text-secondary">
                            <strong>{habitacion.costo}</strong>
                        </p>
                        <p>{habitacion.hotel}</p>
                        <p>:{habitacion.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Habitacion;
