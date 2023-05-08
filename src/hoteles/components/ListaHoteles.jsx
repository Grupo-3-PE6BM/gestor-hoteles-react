import { useEffect, useState } from "react";
import { apiHotel } from "../api/apiHotel";
import { Hoteles } from "./Hoteles";

export const ListaHoteles = () => {
  const [listaHoteles, setListaHoteles] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>Hubo un error al cargar los hoteles: {error.message}</div>;
  }

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
      <center>
        <div className="container mt-4 mb-5">
          {listaHoteles.map((hotel) => (
            <Hoteles key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </center>
    </>
  );
};
