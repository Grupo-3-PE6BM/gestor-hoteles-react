import { createEvento, updateEvento } from "../api/apiEventos";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  nombre: Yup.string().required(
    "El nombre del evento es requerido obligatoriamente"
  ),
  descripcion: Yup.string().required(
    "La descripcion del evento es requerida obligatoriamente"
  ),
  fecha: Yup.date().required("fecha requerido!"),
  disponibilidad: Yup.boolean().required("disponibilidad requerido!"),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (state, option, id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createEvento({
        // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.evento.nombre,
        descripcion: state.evento.descripcion,
        fecha: state.evento.fecha,
        precio: state.evento.precio,
        disponibilidad: state.evento.disponibilidad,
        img: state.evento.img,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Evento creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/eventos";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateEvento({ // Llamar al método de axios con el id y los datos a actualizar
        id: state.evento._id,
        nombre: state.evento.nombre,
        descripcion: state.evento.descripcion,
        fecha: state.evento.fecha,
        precio: state.evento.precio,
        disponibilidad: state.evento.disponibilidad,
        img: state.evento.img,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Evento actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/eventos";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};
