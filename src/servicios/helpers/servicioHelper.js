import { createServicio, updateServicio } from "../api/apiServicio";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  nombre: Yup.string().required(
    "El nombre del servicio es requerido obligatoriamente"
  ),
  descripcion: Yup.string().required(
    "La descripcion del servicio es requerida obligatoriamente"
  ),
  precio: Yup.number().required("Precio requerido!"),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (state, option, id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createServicio(
        // Llamar al método de axios con el id y los datos a actualizar
        state.servicio.nombre,
        state.servicio.descripcion,
        state.servicio.precio
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Servicio creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/servicios";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateServicio(// Llamar al método de axios con el id y los datos a actualizar
        state.servicio.nombre,
        state.servicio.descripcion,
        state.servicio.precio,
        state._id,
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Servicio actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/servicios";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};
