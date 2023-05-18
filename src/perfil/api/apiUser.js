import axios from "axios";
const URL = "http://localhost:8080/api/usuarios/";

export const apiUsuarioById = async(token) => {
  
    try {
      const listaUsuarios = await axios.get(`${URL}mostrar/${token}`);
      console.log(listaUsuarios.data);
      return listaUsuarios.data;
    } catch (error) {}
  }

  export const apiEliminarUsuarioById = async(token) => {
   
      try {
        const listaUsuarios = await axios.delete(`${URL}eliminarById/${token}`);
        console.log(response.data.msg);
        return response.data;
      } catch (error) {}
    }

    export const updateProfile = async(id, nombre, correo) => {
   
      try {
        const listaUsuarios = await axios.put(`${URL}editar/${id}`,{
          nombre: nombre,
          correo: correo
        });
        console.log(listaUsuarios.data.msg);
        return listaUsuarios.data;
      } catch (error) {}
    }