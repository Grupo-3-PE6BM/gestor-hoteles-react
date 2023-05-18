import React, { useState } from 'react';
import {sendData}from '../helpers/eventoHelper';
import { apiTipoEvent } from '../api/apiEventos';

export const FormEvento = (eventoEdit, option, id) => {
    console.log("ENTREEEEE");
    const [state, setState] = useState(eventoEdit);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      sendData(state, 2, id);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Nombre del Evento</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={state.evento.nombre}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </div>
          <div className="form-group"> 
            <label className="text-black">Descripcion</label>
            <textarea
              className="form-control"
              name="descripcion"
              value={state.evento.descripcion}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    descripcion: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">Fecha</label>
            <textarea
              className="form-control"
              name="fecha"
              value={state.evento.fecha}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    fecha: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">Precio</label>
            <textarea
              className="form-control"
              name="precio"
              value={state.evento.precio}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    precio: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">disponibilidad</label>
            <textarea
              className="form-control"
              name="disponibilidad"
              value={state.evento.disponibilidad}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    disponibilidad: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">URL de imagen</label>
            <textarea
              className="form-control"
              name="img"
              value={state.evento.img}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    img: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">Tipo</label>
            <textarea
              className="form-control"
              name="tipo"
              value={state.evento.tipo}
              onChange={(event) =>
                setState({
                  evento: {
                    ...state.evento,
                    tipo: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="container text-center">
            <button id="btn-enviar" type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
      </>
    );
  };
  