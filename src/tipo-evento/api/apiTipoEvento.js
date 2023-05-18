import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/tipoEventos/";

export const apiTipoEvento = async () => {
  try {
    // const listaTipoEvento = await axios.get(`${URL}mostrar`);
    // console.log(listaTipoEvento.data.listaTipos);
    // return listaTipoEvento.data.listaTipos;
    const { data: { listaTipos } } = await axios.get(`${URL}mostrar`);
    return listaTipos;
  } catch ({ response: { data } }) {
    //console.log(message);
    return data.message;
  }
};

export const DeleteTipoEvento = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Tipo de evento eliminado correctamente") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};

export const updateTipoEvento = async (tipoEvento, img, id) => {
  try {
    const tipoEventoEditado = await axios.put(
      `${URL}editar/${id}`,
      {
        tipoEvento: tipoEvento,
        img: img,
      },
      { headers: { "x-token": token } }
    );
    return tipoEventoEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el tipo de evento!",
    });
  }
};

export const createTipoEvento = async (
  tipoEvento,
  img,
) => {
  console.log('TOKEN', token)
  console.log(tipoEvento, img)
  try {
    const TipoEventoGuardado = await axios.post(
      `${URL}agregar`, {
      tipoEvento: tipoEvento,
      img: img,
    },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "No se pudo agregar el hotel!",
    });
  }
};
