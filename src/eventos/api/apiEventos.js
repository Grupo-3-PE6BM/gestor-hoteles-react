import axios from "axios";

export const apiEventos = async () => {
  try {
    const URL = 'http://localhost:8080/api/eventos/mostrar';
    const response = await axios.get(URL);
    // console.log(response.data); // Agregar esta línea
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
