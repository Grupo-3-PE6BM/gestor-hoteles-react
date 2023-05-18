import React, { useState } from "react";
import { Cards } from "./Cards";
import { apiHoteles } from "../api/apiBuscar";

export const Buscar = () => {
  const token = localStorage.getItem("token");
  const showOptions = token ? true : false;
  const [hotel, setHotel] = useState("");
  const [resultado, setResultado] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await apiHoteles(hotel);
    setResultado(results);
  };

  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Busca<span className="highlight">dor</span>
          </h2>
          <p className="intro">Busca aqui los hoteles</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>
      <div className="container">
        <div className="search-container">
          <form className="formBusca" onSubmit={handleSearch}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Busca tu siguiente destino"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="submit-box">
              <button className="btn btn-success" type="submit" id="hola">
                Buscar
              </button> 
            </div>
          </form>
        </div>
        <Cards hotel={resultado} showOptions={showOptions} />
      </div>
    </>
  );
};
