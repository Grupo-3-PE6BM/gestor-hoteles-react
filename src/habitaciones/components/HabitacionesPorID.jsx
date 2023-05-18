import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  apiHabitacionesId,
  agregarHabitacion,
  editReservacion,
} from "../api/apiHabitaciones";

export const HabitacionPorId = () => {
  const [habitacion, setHabitacion] = useState([]);
  const [reserva, setReserva] = useState({
    dia_llegada: "",
    dia_salida: "",
    numero_de_huespedes: 1,
  });

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewHabitacionesId = async () => {
    const getListaHabitacionesFromApi = await apiHabitacionesId(id);
    setHabitacion(getListaHabitacionesFromApi);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setReserva((prevData) => ({ ...prevData, [name]: value }));
  }
  useEffect(() => {
    viewHabitacionesId();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addHabitacion = await agregarHabitacion(id);
    const putReserva = await editReservacion({
      dia_llegada: reserva.dia_llegada,
      dia_salida: reserva.dia_salida,
      numero_de_huespedes: reserva.numero_de_huespedes,
    });
    navigate(`/`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-12 mb-4 mt-6">
            <div className="row g-0">
              <div className="col-md-12">
                <img
                  src={habitacion.img}
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">
                    Numero de habitacion: {habitacion.numero}
                  </h5>
                  <p>
                    {" "}
                    <strong>Descripcion: </strong> {habitacion.descripcion}
                  </p>
                  <p>
                    {" "}
                    <strong>Tipo: </strong> {habitacion.tipo_habitacion}
                  </p>

                  <span type="button" className="btn btn-success">
                    Precio: Q.{habitacion.costo}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h5 class="card-header">Informacion de la reserva</h5>
            <div class="card-body">
              <div className="container">
                <div className="search-container col-12">
                  <form className="formReserva" onSubmit={handleSearch}>
                    <div className="form-group">
                      <div className="container">
                        <label htmlFor="dia_llegada">Entrada</label>
                        <input
                          type="date"
                          className="form-control"
                          value={reserva.dia_llegada}
                          name="dia_llegada"
                          id="dia_llegada"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="container">
                      <div className="form-group">
                        <label htmlFor="dia_salida">Salida</label>
                        <input
                          type="date"
                          className="form-control"
                          value={reserva.dia_salida}
                          name="dia_salida"
                          id="dia_salida"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="container">
                      <div className="form-group">
                        <label htmlFor="numero_de_huespedes">Huéspedes</label>
                        <input
                          type="number"
                          className="form-control"
                          name="numero_de_huespedes"
                          id="numero_de_huespedes"
                          value={reserva.numero_de_huespedes}
                          min="1"
                          max="5"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="container">
                      <button className="btn btn-primary" type="submit">
                        Reservar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
