import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const registerDoctor = (body) => {
    
    axios.post('api/doctors/register/', body)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}



