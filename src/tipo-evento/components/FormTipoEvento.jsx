import React, { useState } from "react";
import { sendData } from "../helpers/tipoEventoHelper";

export const FormTipoEvento = ({eventTypeEdit}) => {
  
  const [state, setState] = useState(eventTypeEdit);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-black">Tipo Evento</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={state.tipoEvento}
            onChange={({ target: { value } }) =>
              setState(() => ({ ...state, tipoEvento: value }))
            }
          />
        </div>

        <div className="form-group">
          <label className="text-black">URL de imagen</label>
          <textarea
            className="form-control"
            name="img"
            value={state.img}
            onChange={({ target: { value } }) =>
              setState(() => ({ ...state, img: value }))
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
