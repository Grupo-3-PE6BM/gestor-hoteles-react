import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = 'http://localhost:8080/api/eventos/';

export const apiEvento = async () => {
  try {

    const evento = await axios.get(`${URL}mostrar`);
    console.log("esta es la data0", evento.data.listaEventos);
    return evento.data.listaEventos;
  } catch ({ response: { data } }) {
    console.error(error);
    return data.message;
  }
};

export const DeleteEvento = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Evento Eliminado Correctamente") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};

export const updateEvento = async (
  id,
  nombre,
  descripcion,
  fecha,
  precio,
  disponibilidad,
  img
) => {
  console.log("Este es el id",id);
  console.log("este es el nombre",nombre);
  try {
    const eventoEditado = await axios.put(
      `${URL}editar/${id.id}`,
      {
        nombre: id.nombre,
        descripcion: id.descripcion,
        fecha: id.fecha,
        precio: id.precio,
        disponibilidad: id.disponibilidad,
        img : id.img
      },
      { headers: { "x-token": token } }
    );
    return eventoEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el Eventoo",
    });
  }
};

//Cambio realizado (tener en cuenta)
export const createEvento = async (
  nombre,
  descripcion,
  fecha,
  precio,
  disponibilidad,
  img
) => {
  console.log('TOKEN', token)
  try {
    const { eventoGuardado } = await axios.post(
      `${URL}agregar`, {
      nombre: nombre,
      descripcion: descripcion,
      fecha: fecha,
      precio: precio,
      disponibilidad: disponibilidad,
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
      text: "No se pudo agregar el evento!",
    });
  }
};