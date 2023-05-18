import { createHotel, updateHotel } from "../api/apiHotel";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  nombre: Yup.string().required(
    "El nombre del hotel es requerido obligatoriamente"
  ),
  direccion: Yup.string().required(
    "La direccion del hotel es requerida obligatoriamente"
  ),
  telefono: Yup.number().required("Telefono requerido!"),
  valoracion: Yup.number().required("Valoracion requerido!"),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (state, option, id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createHotel({
        // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.hotel.nombre,
        direccion: state.hotel.direccion,
        telefono: state.hotel.telefono,
        valoracion: state.hotel.valoracion,
        img: state.hotel.img,
        administrador: state.hotel.administrador,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Hotel creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/hoteles";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateHotel({ // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.hotel.nombre,
        direccion: state.hotel.direccion,
        telefono: state.hotel.telefono,
        valoracion: state.hotel.valoracion,
        img: state.hotel.img,
        administrador: state.hotel.administrador,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Hotel actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/hoteles";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};
