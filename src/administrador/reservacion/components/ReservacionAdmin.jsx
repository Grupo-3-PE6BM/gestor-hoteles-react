import { apiReserva } from "../api/apiReservacion";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export const ReservacionAdmin = () => {
  const [listaReservas, setListaRes] = useState([]);
  console.log(listaReservas);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  console.log(id);
  const [evento, setEvento] = useState({});
  const [reservaciones, setReservaciones] = useState([]);

  const viewReservas = async () => {
    const setListaReservas = await apiReserva(id);
    setListaRes(setListaReservas);
  };

  useEffect(() => {
    viewReservas();
  }, []);

  const handleOpenModal = (e) => {
    setShowModal(true);
    setEvento(e);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };


  const eliminarReservacion = async (id) => {
    let result = await deleteReservacion();
    if (result) {
      setReservaciones(reservaciones.filter((r) => r._id !== id));
      console.log("hola");
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se elimino la reservacion con exito!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar la reservacion!",
      });
    }
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Reserva<span className="highlight">ciones</span>
          </h2>
          <p className="intro">Listado de Servicios</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container">
        <h1 id="titulo-reservacion">Reservacion</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Reservacion</th>
              <th scope="col">Habitacion</th>
              <th scope="col">Evento</th>
              <th scope="col">Servicio</th>
              <th scope="col">Dia Llegada</th>
              <th scope="col">Dia Salida</th>
              <th scope="col">Cantidad Huespedes</th>
              <th scope="col">Total</th>
              <th scope="col">Opciones </th>
            </tr>
          </thead>
          <tbody>
            {listaReservas.map((r) => {
              console.log(r);
              return (
                <tr key={r._id}>
                  <td>{r.reservacion}</td>
                  
                  {r.habitacion.length === 0 ? (
                    <td>Sin Habitaciones asignados</td>
                  ) : (
                    <td>
                      {r.habitacion.map((h) => (
                        <p key={h._id}>{h.numero}</p>
                      ))}
                    </td>
                  )}
                  {r.evento.length === 0 ? (
                    <td>Sin Eventos asignados</td>
                  ) : (
                    <td>
                      {r.evento.map((e) => (
                        <p key={e._id}>{e.nombre}</p>
                      ))}
                    </td>
                  )}
                  {r.servicio.length === 0 ? (
                    <td>Sin Servicios asignados</td>
                  ) : (
                    <td>
                      {r.servicio.map((s) => (
                        <p key={s._id}>{s.nombre}</p>
                      ))}
                    </td>
                  )}
                  <td>{new Date(r.dia_llegada).toLocaleDateString()}{" "}</td>
                  <td>{new Date(r.dia_salida).toLocaleDateString()}{" "}</td>
                  <td>{r.numero_de_huespedes}</td>
                  <td>$. {r.total}.00</td>
                  <td>
                  <button
                        className="btn btn-danger"
                        onClick={() => {
                          eliminarReservacion(r._id);
                        }}
                      > Eliminar
                        <DeleteIcon />
                      </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
