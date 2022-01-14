import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const getListPatient = (body) => {
    
    axios.get('/api/admin/getDoctorList', body)
        .then(function (response) {
        console.log(response);
        return response;
        })
        .catch(function (error) {
        console.log(error);
    });
}
