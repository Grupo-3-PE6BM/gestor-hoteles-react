import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { apiUsuario } from "../api/apiUsuarios";

export const ListUsers = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const viewUsersList = async () => {
    try {
      const getListUsersFromApi = await apiUsuario();
      setListaUsuarios(getListUsersFromApi[1]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    viewUsersList();
  }, []);

  useEffect(() => {
    console.log("Habitaciones actualizados:", listaUsuarios);
  }, [listaUsuarios]);

  if (error) {
    return <div>Hubo un error al cargar las habitaciones : {error.message}</div>;
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Usua<span className="highlight">rios</span>
          </h2>
          <p className="intro">Listado de Usuarios</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>

            </tr>
          </thead>
          <tbody>

            {listaUsuarios.map((u) => {

              return (

                <tr key={String(u._id)}>
                  <th scope="row">{u._id}</th>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
