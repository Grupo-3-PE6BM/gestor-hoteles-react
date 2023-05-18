import { useState } from "react";
import { formOptions, sendData } from "../helpers/tipoEventoHelper";
import { tipoEvento } from "../model/tipoEvento";

export const CreateTipoEvento = () => {
  const [agregar, setAgregar] = useState(tipoEvento);
  console.log(agregar);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  return (
    <>
      <div className="container">
        <h1 id="create-tarea">CREAR TIPO EVENTO</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Tipo Evento</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={agregar.tipoEvento}
              onChange={({ target: { value } }) =>
                setAgregar(() => ({ ...agregar, tipoEvento: value }))
              }
            />
          </div>

          <div className="form-group">
            <label className="text-black">URL de imagen</label>
            <input
              type="text"
              className="form-control"
              name="img"
              value={agregar.img}
              onChange={({ target: { value } }) =>
                setAgregar(() => ({ ...agregar, img: value }))
              }
            // onChange={(event) =>
            //   setAgregar({
            //     tipoevento: {
            //       ...agregar.tipoEvento,
            //       img: event.target.value,
            //     },
            //   })
            // }
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
