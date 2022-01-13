import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const registerPatient = async (body) => {
    return await axios.post('/api/patient/register', body)
                .then(response => response.data)
            
    // axios.post('/api/patient/register', body)
    //     .then(function (response) {
    //     console.log(response);
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    // });
}
export const loginPatient = async (body) => {
    return await axios.post('/api/patient/login', body)
                .then(response => response.data)
}


