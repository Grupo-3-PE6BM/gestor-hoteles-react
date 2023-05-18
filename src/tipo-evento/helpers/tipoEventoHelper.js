import { createTipoEvento, updateTipoEvento } from "../api/apiTipoEvento";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  tipoEvento: Yup.string().required(
    "El tipo de evento es requerido obligatoriamente"
  ),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (state, option) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createTipoEvento(
        // Llamar al método de axios con el id y los datos a actualizar
        state.tipoEvento,
        state.img
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Hotel creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/tipoevento";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateTipoEvento(// Llamar al método de axios con el id y los datos a actualizar        
        state.tipoEvento,
        state.img,
        state._id,
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Hotel actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/tipoevento";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};
