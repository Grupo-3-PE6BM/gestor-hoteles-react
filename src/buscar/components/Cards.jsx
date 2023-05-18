import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Cards = ({ hotel, showOptions }) => {
  const navigate = useNavigate();


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            {hotel != null ? (
              hotel.map((hotel) => {
                return (
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
                          {showOptions && (
                          <button className="btn btn-primary" id="tito">
                            <Link
                              to={`/habPorHotel/${hotel._id}`}
                              className="nav-link"
                            >
                              Habitaciones
                            </Link>
                          </button>
                          )}

                          {showOptions && (
                          <button className="btn btn-primary" id="tito">
                            <Link
                              to={`/evePorHotel/${hotel._id}`}
                              className="nav-link"
                            >
                              Eventos
                            </Link>
                          </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="container">
                <p>Ingresa la direccion del hotel o su nombre!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};
