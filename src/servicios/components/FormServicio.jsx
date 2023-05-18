import { useEffect, useState } from "react";
import { apiServicio, DeleteServicio, updateServicio } from "../api/apiServicio";
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { servicio } from "../model/servicio"
import Swal from "sweetalert2";
import { UpdateServicio } from "./UpdateServicio";

export const ListaServicios = () => {
  const [listaServicios, setListaServicios] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [servicios, setServicios] = useState(servicio)

  const viewServiciosList = async () => {
    try {
      const getListaServiciosFromApi = await apiServicio();
      setListaServicios(getListaServiciosFromApi);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewServiciosList();
  }, []);

  useEffect(() => {
    console.log("Servicios actualizados:", listaServicios);
  }, [listaServicios]);

  const handleOpenModal = (servicio) => {
    setShowModal(true);
    setServicios(servicio);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return <div>Hubo un error al cargar los servicios: {error.message}</div>;
  }

  const eliminarServicio = async (id) => {
    let result = await DeleteServicio(id);
    if (result) {
      setListaServicios(listaServicios.filter((servicio) => servicio._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el servicio correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el servicio!",
      });
    }
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Serv<span className="highlight">icios</span>
          </h2>
          <p className="intro">Listado de Servicios</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        <button className="btn btn-primary btn-lg btn-block" id="boton-agregar">
          {" "}
          <Link className='nav-item-active' to='/agregarServicio'>Agregar Servicio <AddIcon />{" "}</Link>
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>

            </tr>
          </thead>
          <tbody>
            {
              listaServicios.map((servicio) => (
                <tr key={servicio._id}>
                  <th scope="row">{servicio._id}</th>
                  <td>{servicio.nombre}</td>
                  <td>{servicio.descripcion}</td>
                  <td>{servicio.precio}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleOpenModal(servicio)}> Editar
                      <EditIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminarServicio(servicio._id);
                        console.log("hola");
                      }}
                    > Eliminar
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
        <UpdateServicio
          servicioEdit={servicios}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateServicio>
      </div>
    </>
  );
};