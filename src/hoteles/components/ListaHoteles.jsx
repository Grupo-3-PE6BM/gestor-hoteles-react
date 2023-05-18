import { useEffect, useState } from "react";
import { apiHotel, DeleteHotel, updateHotel } from "../api/apiHotel";
import { Link } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {hotel} from "../model/hotel"
import Swal from "sweetalert2";
import { UpdateHotel } from "./UpdateHotel";

export const ListaHoteles = () => {
  const [listaHoteles, setListaHoteles] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoteles, setHoteles] = useState(hotel)

  const viewHotelesList = async () => {
    try {
      const getListaHotelesFromApi = await apiHotel();
      setListaHoteles(getListaHotelesFromApi);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewHotelesList();
  }, []);

  useEffect(() => {
    console.log("Hoteles actualizados:", listaHoteles);
  }, [listaHoteles]);

  const handleOpenModal = (hotel) => {
    setShowModal(true);
    setHoteles(hotel);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (error) {
    return <div>Hubo un error al cargar los hoteles: {error.message}</div>;
  }

  const eliminarHotel = async (id) => {
    let result = await DeleteHotel();
    if (result) {
      setListaHoteles(listaHoteles.filter((hotel) => hotel._id !== id));
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
            Ho<span className="highlight">teles</span>
          </h2>
          <p className="intro">Listado de hoteles</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      
      <div className="container mt-4 mb-5">
        <button className="btn btn-primary btn-lg btn-block" id="boton-agregar">
          {" "}
          <Link className='nav-item-active' to='/agregarHotel'>Agregar Hotel <AddIcon />{" "}</Link>
        </button>
          <table className="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Telefono</th>
                <th scope="col">Valoracion</th>
                <th scope="col">Imagen</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>

              </tr>
            </thead>
            <tbody>

              {listaHoteles.map((hotel) => {

                return (

                  <tr key={hotel._id}>
                    <th scope="row">{hotel._id}</th>
                    <td>{hotel.nombre}</td>
                    <td>{hotel.direccion}</td>
                    <td>{hotel.telefono}</td>
                    <td>{hotel.valoracion} Estrellas</td>
                    <td>{hotel.img}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleOpenModal(hotel)}> Editar
                        <EditIcon />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          eliminarHotel(hotel._id);
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
          <UpdateHotel
          hotelEdit={hoteles}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateHotel>
      </div>
    </>
  );
};
