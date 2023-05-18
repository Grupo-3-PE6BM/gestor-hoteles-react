import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/usuarios/";

export const apiUsuario = async () => {
  try {
    const listaUsuarios = await axios.get(`${URL}mostrar`);
    return listaUsuarios.data.listaUsuarios;
  } catch ({ response: { data } }) {
    return data.message;
  }
};
