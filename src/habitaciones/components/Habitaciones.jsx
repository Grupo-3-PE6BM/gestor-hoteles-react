import { useEffect, useState } from "react";
import { apiHabitaciones } from "../api/apiHabitaciones";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Habitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const data = await apiHabitaciones();
        setHabitaciones(data.listaHabitaciones[1]);
      } catch (error) {
        setError(error);
      }
    };
    fetchHabitaciones();
  }, []);

  
  useEffect(() => {
    console.log("Habitaciones listadas:", habitaciones);
  }, [habitaciones]);

  const { id } = useParams();
  const navigate = useNavigate();


  if (error) {
    return (
      <div>Ocurrio un error al cargar los "Habitaciones": {error.message}</div>
    );
  }

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Habitaci<span className="highlight">ones</span>
          </h2>
          <p className="intro">Listado de Habitaciones</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5">
        {habitaciones.map((habitacion) => (
          <div className="col-md-12" key={habitacion._id}>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img
                  src={habitacion.img}
                  className="img-fluid w-100 card-img"
                  alt={habitacion.numero}
                />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0">
                    <strong>HABITACION NO. {habitacion.numero}</strong>
                  </h4>
                  <p className="text-secondary">
                    <strong>{habitacion.hotel.nombre}</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">
                      {habitacion.descripcion}
                    </li>
                  </ul>
                  <p>
                    <strong>
                      Disponibilidad:{" "}
                      {habitacion.disponibilidad
                        ? "Disponible"
                        : "No disponible"}
                    </strong>
                  </p>
                  <p>
                    <strong>Tipo: {habitacion.tipo_habitacion}</strong>
                  </p>
                  <p>
                    <strong>$. {habitacion.costo}</strong> -{" "}
                    <a className="btn btn-warning ms-1" href={`/habitacionID?id=${habitacion._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/habitacionId/${habitacion._id}`);
                    }}> Reservar </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
