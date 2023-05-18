import React, { useState } from "react";
import { sendData } from "../helpers/servicioHelper";
import { servicio } from "../model/servicio";

export const CreateServicio = () => {
  const [agregar, setAgregar] = useState(servicio);
  console.log(agregar)
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  return (
    <>
      <div className="container">
        <h1 id="create-tarea">CREAR SERVICIO</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Nombre del servicio</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={agregar.nombre}
              onChange={(event) =>
                setAgregar({
                  servicio: {
                    ...agregar.servicio,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label className="text-black">Descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              value={agregar.descripcion}
              onChange={(event) =>
                setAgregar({
                  servicio: {
                    ...agregar.servicio,
                    descripcion: event.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div className="form-group">
            <label className="text-black">precio:</label>
            <input
              type="text"
              className="form-control"
              name="precio"
              value={agregar.precio}
              onChange={(event) =>
                setAgregar({
                  servicio: {
                    ...agregar.servicio,
                    precio: event.target.value,
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
