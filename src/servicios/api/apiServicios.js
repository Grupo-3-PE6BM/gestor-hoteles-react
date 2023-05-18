import axios from "axios";

const URL = 'http://localhost:8080/api/servicios/';
const URL_R = 'http://localhost:8080/api/reservaciones/';
const token = localStorage.getItem("token");

export const apiServicios = async () => {
  try {
    const response = await axios.get(`${URL}mostrar`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiServiciosId = async (id) => {
  try {
    const { data: { servicio: servicio } } = await axios.get(`${URL}mostrar/${id}`);
    console.log(servicio);
    return servicio;
  } catch (error) {
    console.error(error);
  }
}

export const agregarServicios = async (id) => {
  try {
    const servicioId = await axios.post(`${URL_R}agregarServicio/${id}` ,null,  { headers: { "x-token": token } });
    return servicioId.data;
  } catch (error) {}
};