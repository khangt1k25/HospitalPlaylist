import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const registerPatient = (body) => {
    
    axios.post('/api/patient/register', body)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
export const loginPatient = (body) => {
    axios.post('/api/patient/login', body)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}


