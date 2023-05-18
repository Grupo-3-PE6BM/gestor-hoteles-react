import { useEffect, useState } from "react";
import { apiEvento, DeleteEvento, } from "../api/apiEventos";
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {evento} from "../model/evento"
import Swal from "sweetalert2";
import { UpdateEvento } from "./UpdateEvento";

export const ListaEventos = () => {
  const [listaEventos, setListaEventos] = useState([]);
  console.log("ESta es la lsita de ",listaEventos);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [eventos, setEventos] = useState(evento)

  const viewEventosList = async () => {
    try {
      const getListaEventosFromApi = await apiEvento();
      
      setListaEventos(getListaEventosFromApi);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewEventosList();
  }, []);

 

  const handleOpenModal = (evento) => {
    setShowModal(true);
    setEventos(evento);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return <div>Hubo un error al cargar los eventos: {error.message}</div>;
  }

  const eliminarEvento = async (id) => {
    console.log(id);
    let result = await DeleteEvento(id);
    if (result) {
      setListaEventos(listaEventos.filter((evento) => evento._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial :)!",
        text: "Se eliminó la tarea correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar la tarea!",
      });
    }
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Even<span className="highlight">tos</span>
          </h2>
          <p className="intro">Listado de eventos</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      
      <div className="container mt-4 mb-5">
        <button className="btn btn-primary btn-lg btn-block" id="boton-agregar">
          {" "}
          <Link className='nav-item-active' to='/agregarEvento'>Agregar Evento <AddIcon />{" "}</Link>
        </button>
          <table className="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Fecha</th>
                <th scope="col">Precio</th>
                <th scope="col">Disponibilidad</th>
                <th scope="col">Imagen</th>
                <th scope="caol">Tipo</th>

                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>

              </tr>
            </thead>
            <tbody>

              {listaEventos.map((e) => {
                
                return (

                  <tr key={e._id}>
                    <th scope="row">{e._id}</th>
                    <td>{e.nombre}</td>  
                    <td>{e.descripcion}</td>
                    <td>{e.fecha}</td>
                    <td>{e.precio}</td>
                    <td>{e.disponibilidad}</td>
                    <td>{e.img}</td>
                    <td>{e.tipo.tipoEvento}</td>

                    <td>
                      <button className="btn btn-warning" onClick={() => handleOpenModal(e)}> Editar
                        <EditIcon />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          eliminarEvento(e._id);
                          console.log("hola, vas bien papu")
                        }}
                      > Eliminar
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <UpdateEvento
          eventlEdit={eventos}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateEvento>
      </div>
    </>
  );
};
