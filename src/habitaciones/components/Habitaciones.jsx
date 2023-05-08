import { useEffect, useState } from "react";
import { apiHabitaciones } from "../api/apiHabitaciones";
import Habitacion from "./ListarHabitaciones";


export const Habitaciones = () => {

  const [habitaciones, setHabitaciones] = useState([]);
  const [error, setError] = useState(null);
    

  useEffect(()=>{
    const fetchHabitaciones = async ()=>{
      try {
        const data = await apiHabitaciones();
        setHabitaciones(data.listaHabitaciones[1])
      } catch (error) {
        setError(error);
      }
    };
    fetchHabitaciones();
  }, []);

  useEffect(()=>{
    console.log("Habitaciones super super super aactualizados:", habitaciones)
  }, [habitaciones])

  if (error) {
    return <div>Ocurrio un error al cargar los "Habitaciones": {error.message}</div>;
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
          {habitaciones.map((habitacion)=>(
            <Habitacion key={habitacion._id} habitacion={habitacion}/>
          ))}
        </div>
      </>
    );
  };
  

