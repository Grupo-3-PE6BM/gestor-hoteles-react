import React, { useState, useEffect } from "react";
import { sendData } from "../helpers/eventoHelper";
import { evento } from "../model/evento";
import { apiTipoEvent } from "../api/apiEventos";
import Dropdown from 'react-bootstrap/Dropdown';
import { set } from "react-hook-form";

export const CreateEvento = () => {
  const [agregar, setAgregar] = useState(evento);
  const [listaEventos, setListaEventos] = useState([]);
    console.log(agregar);
  
    const viewEventosList = async () => {
      try {
        const getListaEventosFromApi = await apiTipoEvent();
        
        setListaEventos(getListaEventosFromApi);
      } catch (error) {
        setError(error);
      }
    };
  
    useEffect(() => {
      viewEventosList();
    }, []);
    

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  const idTipoEvento = (tipo)=> setAgregar(()=>({...agregar.evento, tipo:tipo._id}))
    

  
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
            <label className="text-black">Precio</label>
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
          <div className="form-group">
            <label className="text-black">Tipo</label>
            <Dropdown>
              <Dropdown.Toggle>
                Tipo de eventos
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  listaEventos.map((t)=>{
                    return(
                      <Dropdown.Item
                      key={t._id}
                      
                      name="tipo"
                      onClick={()=>idTipoEvento(t)}
                      
                      >
                        {t.tipoEvento}
                      </Dropdown.Item>
                    )
                  })
                }
              </Dropdown.Menu>
            </Dropdown>
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
