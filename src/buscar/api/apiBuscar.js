import axios from "axios";
import Swal from "sweetalert2";


const URL = 'http://localhost:8080/api/buscar/hoteles/';

export const apiHoteles = async(hotel) => {
    if(hotel != ""){
    try {
        const hoteles = await axios.get(`${URL}${hotel}`);
        return hoteles.data.results;
    } catch (error) {
        console.log(error)
    }
    }
}