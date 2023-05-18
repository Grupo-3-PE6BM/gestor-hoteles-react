import React, { useState } from "react";
import { sendData } from "../helpers/eventoHelper";
import { evento } from "../model/evento";

export const CreateEvento = () => {
  const [agregar, setAgregar] = useState(evento);
  console.log(agregar)
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  return (
    <>
      <div className="container">
        <h1 id="create-tarea">CREAR EVENTO</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Nombre del Evento</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={(event) =>
                setAgregar({
                  evento: {
                    ...agregar.evento,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label className="text-black">Descripcion</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              onChange={(event) =>
                setAgregar({
                  evento: {
                    ...agregar.evento,
                    descripcion: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="form-group">
            <label className="text-black">Fecha</label>
            <input
              type="text"
              className="form-control"
              name="fecha"
              onChange={(event) =>
                setAgregar({
                  evento: {
                    ...agregar.evento,
                    fecha: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="form-group">
            <label className="text-black">Precion</label>
            <input
              type="text"
              className="form-control"
              name="precio"
              onChange={(event) =>
                setAgregar({
                  evento: {
                    ...agregar.evento,
                    precio: event.target.value,
                  },
                })
              }
            ></input>
          </div>
          <div className="form-group">
            <label className="text-black">URL de la imagen</label>
            <input
              type="text"
              className="form-control"
              name="img"
              onChange={(event) =>
                setAgregar({
                  evento: {
                    ...agregar.evento,
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
