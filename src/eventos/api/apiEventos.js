import axios from "axios";

const URL = 'http://localhost:8080/api/eventos/';
const URL_R = 'http://localhost:8080/api/reservaciones/';
const token = localStorage.getItem("token");


export const apiEventos = async () => {
  try {
    const response = await axios.get(`${URL}mostrar`);
    // console.log(response.data); // Agregar esta línea
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiEventosId = async (id) => {
  try {
    const { data: { evento: evento } } = await axios.get(`${URL}mostrar/${id}`);
    console.log(evento);
    return evento;
  } catch (error) {
    console.error(error);
  }
};

export const apiEventosDeHotel = async (id) => {
  try {
    const response = await axios.get(`${URL}mostrarEvePorHotel/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las habitaciones del hotel");
  }
};


export const agregarEventos = async (id) => {
  try {
    const eventoId = await axios.post(`${URL_R}agregarEvento/${id}` , null, { headers: { "x-token": token } });
    console.log(eventoId.data)
    return eventoId.data;
  } catch (error) {}
};
