export const Hoteles = ({ hotel }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="row rounded bg-white mt-4">
          <div className="col-md-3 pl-0 pr-0"></div>
          <div className="card col-md-12" style={{ width: "18rem" }}>
            <img
              src={hotel.img[0]}
              className="img-fluid w-100"
              alt={hotel.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{hotel.nombre}</h5>
              <p className="card-text">{hotel.direccion}</p>
              <p className="card-text">
                Valoriacion: {hotel.valoracion} Estrellas
              </p>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${hotel._id}`} // Utilizamos el ID del hotel para identificar el modal
              >
                Más información
              </button>

              <div
                className="modal fade"
                id={`exampleModal${hotel._id}`} // Utilizamos el ID del hotel para identificar el modal
                tabIndex="-1"
                aria-labelledby={`exampleModalLabel${hotel._id}`} // Utilizamos el ID del hotel para identificar el título del modal
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id={`exampleModalLabel${hotel._id}`} // Utilizamos el ID del hotel para identificar el título del modal
                      >
                        {hotel.nombre} <br /> ID: {hotel._id}
                      </h1>
                    </div>
                    <div className="modal-body">
                      <div
                        className="accordion accordion-flush"
                        id={`accordionFlushExample${hotel._id}`} // Utilizamos el ID del hotel para identificar el acordeón
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id={`flush-headingOne${hotel._id}`}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapseOne${hotel._id}`} // Utilizamos el ID del hotel para identificar el contenido del acordeón
                              aria-expanded="false"
                              aria-controls={`flush-collapseOne${hotel._id}`} // Utilizamos el ID del hotel para identificar el contenido del acordeón
                            >
                              Dirección
                            </button>
                          </h2>
                          <div
                            id={`flush-collapseOne${hotel._id}`} // Utilizamos el ID del hotel para identificar el contenido del acordeón
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-headingOne${hotel._id}`}
                            data-bs-parent={`#accordionFlushExample${hotel._id}`} // Utilizamos el ID del hotel para identificar el acordeón
                          >
                            <div className="accordion-body">
                              {hotel.direccion}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Número de Teléfono
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.telefono}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingTres"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTres"
                              aria-expanded="false"
                              aria-controls="flush-collapseTres"
                            >
                              Valoración
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTres"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTres"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.valoracion}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingCuatro"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseCuatro"
                              aria-expanded="false"
                              aria-controls="flush-collapseCuatro"
                            >
                              Habitaciones
                            </button>
                          </h2>
                          <div
                            id="flush-collapseCuatro"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingCuatro"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.habitaciones.length > 0 ? (
                                <ul>
                                  {hotel.habitaciones.map((hab) => (
                                    <li key={hab._id}>{hab.numero}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>No hay número de habitación registrado</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingCinco"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseCinco"
                              aria-expanded="false"
                              aria-controls="flush-collapseCinco"
                            >
                              Administrador
                            </button>
                          </h2>
                          <div
                            id="flush-collapseCinco"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingCinco"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.administrador.nombre}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingSeis"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeis"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeis"
                            >
                              Servicios
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSeis"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeis"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.servicios.length === 0 ? (
                                <p>Sin servicios</p>
                              ) : (
                                <ul>
                                  {hotel.servicios.map((ser) => (
                                    <li key={ser._id}>{ser.nombre}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingSiete"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSiete"
                              aria-expanded="false"
                              aria-controls="flush-collapseSiete"
                            >
                              Eventos
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSiete"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSiete"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {hotel.eventos.length === 0 ? (
                                <p>Sin eventos asignados</p>
                              ) : (
                                <ul>
                                  {hotel.eventos.map((eve) => (
                                    <li key={eve._id}> <div className="col-md-12">
                                    <div className="row rounded bg-white mt-4">
                                      <div className="col-md-3 pl-0 pr-0">
                                        <img src={eve.img[0]} className="img-fluid w-100" alt={eve.nombre} />
                                      </div>
                                      <div className="col-md-9">
                                        <div className="card-block p-3">
                                          <h4 className="card-title mt-0"><strong>{eve.nombre}</strong></h4>
                                          <p className="text-secondary">
                                            <strong>{new Date(eve.fecha).toLocaleDateString()}</strong>
                                          </p>
                                          <ul className="list-inline mt-auto">
                                            <li className="list-inline-item">{new Date(eve.fecha).toLocaleDateString()} <span>|</span></li>
                                            <li className="list-inline-item">{eve.disponibilidad ? 'Disponible' : 'No disponible'}</li>
                                          </ul>
                                          <p>{eve.descripcion}</p>
                                          <p>Precio: ${eve.precio}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div> </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};
