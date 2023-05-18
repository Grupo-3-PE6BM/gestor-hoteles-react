import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { sendData } from "../helpers/FormProfileHelper";

export const FormProfile = (profileEdit, option, id) => {
  const [state, setState] = useState(profileEdit);
console.log(state);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.profile.nombre}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                nombre: event.target.value,
            }
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Correo</label>
        <input
          className="form-control"
          name="correo"
          value={state.profile.correo}
          onChange={(event) =>
            setState({
                profile:{
                ...state.profile,
                correo: event.target.value,
            }})
          }
        ></input>
      </div>
      
      <div className="container text-center">
        <button id="btn-enviar" type="submit" className="btn">
          Enviar
        </button>
      </div>
    </form>
  );
};
