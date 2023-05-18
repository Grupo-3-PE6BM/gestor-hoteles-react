import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/hotel/";

export const apiHotel = async () => {
  try {
    const listaHoteles = await axios.get(`${URL}mostrar`);
    console.log(listaHoteles.data.listaHoteles);
    return listaHoteles.data.listaHoteles;
  } catch ({ response: { data } }) {
    return data.message;
  }
};
