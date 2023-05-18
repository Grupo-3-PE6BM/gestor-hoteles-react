import axios from "axios";

const URL = "http://localhost:8080/api/habitaciones/";
const URL_R = "http://localhost:8080/api/reservaciones/";
const token = localStorage.getItem("token");

export const apiHabitaciones = async () => {
  try {
    const response = await axios.get(`${URL}mostrar`);
    // console.log(response.data); // Agregar esta línea
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiHabitacionesId = async (id) => {
  try {
    const {
      data: { habitacion },
    } = await axios.get(`${URL}mostrar/${id}`);
    console.log(habitacion);
    return habitacion;
  } catch (error) {
    console.error(error);
  }
};

export const apiHabitacionesDeHotel = async (id) => {
  try {
    const response = await axios.get(`${URL}mostrarHabPorHotel/${id}`);
    console.log("El hotel tiene las habitaciones: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las habitaciones del hotel");
  }
};

export const agregarHabitacion = async (id) => {
  console.log(id);
  try {
    const agregarHabitacionId = await axios.post(
      `${URL_R}agregarHabitacion/${id}`,
      null,
      { headers: { "x-token": token } }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editReservacion = async (
  dia_llegada,
  dia_salida,
  numero_de_huespedes
) => {
  try {
    const editarReserva = await axios.post(
      `${URL_R}editarReserva`,
      {
        dia_llegada: dia_llegada,
        dia_salida: dia_salida,
        numero_de_huespedes: numero_de_huespedes,
      },
      { headers: { "x-token": token } }
    );
  } catch (error) {
    console.log(error);
  }
};
