import React, { useState } from "react";
import { sendData } from "../helpers/hotelHelper";
import { hotel } from "../model/hotel";

export const CreateHotel = () => {
  const [agregar, setAgregar] = useState(hotel);
  console.log(agregar)
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  return (
    <>
      <div className="container">
        <h1 id="create-tarea">CREAR HOTEL</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Nombre de Hotel</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={(event) =>
                setAgregar({
                  hotel: {
                    ...agregar.hotel,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label className="text-black">Direccion</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              onChange={(event) =>
                setAgregar({
                  hotel: {
                    ...agregar.hotel,
                    direccion: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="form-group">
            <label className="text-black">Telefono</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              onChange={(event) =>
                setAgregar({
                  hotel: {
                    ...agregar.hotel,
                    telefono: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="form-group">
            <label className="text-black">Valoracion</label>
            <input
              type="text"
              className="form-control"
              name="valoracion"
              onChange={(event) =>
                setAgregar({
                  hotel: {
                    ...agregar.hotel,
                    valoracion: event.target.value,
                  },
                })
              }
            ></input>
          </div>
          <div className="form-group">
            <label className="text-black">URL de imagen</label>
            <input
              type="text"
              className="form-control"
              name="img"
              onChange={(event) =>
                setAgregar({
                  hotel: {
                    ...agregar.hotel,
                    img: event.target.value,
                  },
                })
              }
            ></input>
          </div>
          <div className="container text-center">
            <button id="btn-enviar" type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
