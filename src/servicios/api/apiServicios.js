import axios from "axios";

export const apiServicios = async () => {
  try {
    const URL = 'http://localhost:8080/api/servicios/mostrar';
    const response = await axios.get(URL);
    // console.log(response.data); // Agregar esta línea
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
