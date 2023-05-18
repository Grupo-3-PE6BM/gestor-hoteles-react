import axios from "axios";

const URL = 'http://localhost:8080/api';

// Mostrar Informacion
export const apiHotel = async () => {
    try {
        const listaHoteles = await axios.get(`${URL}/hotel/mostrar`);
        console.log(listaHoteles.data.listaHoteles);
        return listaHoteles.data.listaHoteles;
    } catch ({ response: { data } }) {
        //console.log(message);
        return data.message;
    }
}
