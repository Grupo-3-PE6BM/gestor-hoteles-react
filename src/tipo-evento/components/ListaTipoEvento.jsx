import { useEffect, useState } from "react";
import { apiTipoEvento, DeleteTipoEvento } from "../api/apiTipoEvento";
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { tipoEvento } from "../model/tipoEvento";
import Swal from "sweetalert2";
import { UpdateTipoEvento } from "./UpdateTipoEvento";

export const ListaTipoEvento = () => {
  const [listaTipoEvento, setListaTipoEvento] = useState([]);
  const [oneTypeEvent, setOneTypeEvent] = useState(tipoEvento);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const viewTipoEventoList = async () => {
    try {
      const getListaTipoEventoFromApi = await apiTipoEvento();
      setListaTipoEvento(getListaTipoEventoFromApi);
    } catch (error) {
      setError(error);
    }
  };

  const handleOpenModal = (u) => {
    setOneTypeEvent(u);
    console.log(oneTypeEvent)
    setShowModal(true);
  };

  useEffect(() => {
    viewTipoEventoList();
  }, [showModal]);

  useEffect(() => {
    console.log("Tipo eventos actualizados:", listaTipoEvento);
    console.log(tipoEvento)
  }, [listaTipoEvento]);



  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return <div>Hubo un error al cargar los tipos de evento: {error.message}</div>;
  }

  const eliminarTipoEvento = async (id) => {
    let result = await DeleteTipoEvento(id);
    if (result) {
      setListaTipoEvento(listaTipoEvento.filter((tipoevento) => tipoevento._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
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
            Tipo<span className="highlight">Evento</span>
          </h2>
          <p className="intro">Listado Tipo Evento</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        <button className="btn btn-primary btn-lg btn-block" id="boton-agregar">
          {" "}
          <Link className='nav-item-active' to='/agregarTipoEvento'>Agregar Tipo Evento <AddIcon />{" "}</Link>
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Imagen</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>

            </tr>
          </thead>
          <tbody>

            {listaTipoEvento.map((u) => {

              return (

                <tr key={u._id}>
                  <th scope="row">{u._id}</th>
                  <td>{u.tipoEvento}</td>
                  <td>
                    <img src={u.img} alt={u.tipoEvento} className="img-fluid" />
                  </td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleOpenModal(u)}> Editar
                      <EditIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminarTipoEvento(u._id);
                        console.log("hola")
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
        <UpdateTipoEvento
          tipoEventoEdit={oneTypeEvent}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateTipoEvento>
      </div>
    </>
  );
};
