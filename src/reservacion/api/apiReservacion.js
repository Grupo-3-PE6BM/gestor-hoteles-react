import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/reservaciones/";
const token = localStorage.getItem("token");

export const apiReservacion = async() => {
  try {
      const reservacion = await axios.get(`${URL}reservacionUsuario` ,
       { headers: { "x-token": token } });
      return reservacion.data;
  } catch (error) {
      console.log(error)
  }
}


