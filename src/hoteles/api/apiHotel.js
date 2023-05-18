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
    //console.log(message);
    return data.message;
  }
};

export const DeleteHotel = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Hotel Eliminado Correctamente") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};

export const updateHotel = async (
  nombre,
  direccion,
  telefono,
  valoracion,
  img,
  administrador
) => {
  console.log(nombre)
  console.log(direccion)
  try {
    const hotelEditado = await axios.put(
      `${URL}editar`,
      {
        nombre: nombre.nombre,
        direccion: nombre.direccion,
        telefono: nombre.telefono,
        valoracion: nombre.valoracion,
        img: nombre.img,
        administrador: nombre.administrador,
      },
      { headers: { "x-token": token } }
    );
    return hotelEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el hotel!",
    });
  }
};

export const createHotel = async (
  nombre,
  direccion,
  telefono,
  valoracion,
  img,
  administrador
) => {
  console.log('TOKEN', token)
  try {
    const { hotelGuardado } = await axios.post(
      `${URL}agregar`, {
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      valoracion: valoracion,
      img: img,
      administrador,
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
