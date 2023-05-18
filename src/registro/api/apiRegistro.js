import axios from "axios";
import Swal from "sweetalert2";

export const apiRegistro = async (nombre, correo, password) => {
  try {
    const URL = 'http://localhost:8080/api/usuarios/agregarUsuario';

    const response = await axios.post(URL, {
      nombre,
      correo,
      password
    });

    const message = response.data.message;

    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: message,
      confirmButtonText: "Ok"
    });

    return true;

  } catch ({ response: { data: { message } } }) {

    Swal.fire({
      icon: "error",
      title: "Error en el registro",
      text: message
    });

    return false;
  }
}