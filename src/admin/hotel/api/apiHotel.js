import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/hotel/";

export const apiHoteles = async () => {
  try {
    const listaHoteles = await axios.get(`${URL}mostrar`);
    console.log(listaHoteles.data);
    console.log(listaHoteles);
    return listaHoteles.data.listaHoteles;
  } catch (error) {}
};