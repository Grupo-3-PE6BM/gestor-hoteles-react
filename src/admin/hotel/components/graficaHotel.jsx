import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { apiHoteles } from "../api/apiHotel";

export const GraficaHotel = () => {
  const [listaHoteles, setListaHoteles] = useState([]);

  console.log(listaHoteles);

  useEffect(() => {
    fetchHoteles();
  }, []);

  const fetchHoteles = async () => {
    try {
      const listaHotelesFromApi = await apiHoteles();
      const listaHotelesOrdenada = listaHotelesFromApi.sort((a, b) => b.reservaciones - a.reservaciones);
      setListaHoteles(listaHotelesOrdenada);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h1>Grafica de hoteles</h1>
        <BarChart className="mt-4" width={800} height={500} data={listaHoteles}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reservaciones" fill="#FFD100" label={{ position: "top" }} />
        </BarChart>
      </div>
    </>
  );
};