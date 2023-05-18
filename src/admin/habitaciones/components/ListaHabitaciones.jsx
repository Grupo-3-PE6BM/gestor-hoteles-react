import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import { habitacion } from "../model/habitacion";
import { UpdateHabitacion } from "./UpdateHabitacion";
import { apiHabitacion, DeleteHabitacion } from "../api/apiHabitaciones";

export const ListaHabitaciones = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [habitaciones, setHabitaciones] = useState(habitacion);

  const viewHabitacionesList = async () => {
    try {
      const getListaHabitacionesFromApi = await apiHabitacion();
      setListaHabitaciones(getListaHabitacionesFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewHabitacionesList();
  }, []);

  useEffect(() => {
    console.log("Habitaciones actualizados:", listaHabitaciones);
  }, [listaHabitaciones]);

  const handleOpenModal = (habitacion) => {
    setShowModal(true);
    setHabitaciones(habitacion);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return <div>Hubo un error al cargar las habitaciones : {error.message}</div>;
  }

  const eliminarHabitacion = async (id) => {
    let result = await DeleteHabitacion(id);
    if (result) {
      setListaHabitaciones(listaHabitaciones.filter((habitacion) => habitacion._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar!",
      });
    }
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Ha<span className="highlight">bitaciones</span>
          </h2>
          <p className="intro">Listado de habitaciones</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        <button className="btn btn-primary btn-lg btn-block" id="boton-agregar">
          {" "}
          <Link className='nav-item-active' to='/agregarHabitacion'>Agregar Habitacion <AddIcon />{" "}</Link>
        </button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Numero</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Costo</th>
              <th scope="col">Cantidad de personas</th>
              <th scope="col">Tipo de habitacion</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>

            </tr>
          </thead>
          <tbody>

            {listaHabitaciones.map((habitacion) => {

              return (

                <tr key={String(habitacion._id)}>
                  <th scope="row">{habitacion._id}</th>
                  <td>{habitacion.numero}</td>
                  <td>{habitacion.descripcion}</td>
                  <td>$.{habitacion.costo}</td>
                  <td>{habitacion.cantidad_personas} Personas</td>
                  <td>{habitacion.tipo_habitacion}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleOpenModal(habitacion)}> Editar
                      <EditIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarHabitacion(habitacion._id)}
                    >
                      Eliminar
                      <DeleteIcon />
                    </button>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <UpdateHabitacion
          habitacionEdit={habitaciones}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHabitacion>
      </div>
    </>
  );
};
