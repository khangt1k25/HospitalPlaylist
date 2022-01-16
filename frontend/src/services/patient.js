import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const registerPatient = async (body) => {
    return await axios.post('/api/patient/register', body)
                .then(response => response.data).catch(error => error)

}
export const loginPatient = async (body) => {
    return await axios.post('/api/patient/login', body)
                .then(response => response.data).catch(error => error)
}
export const getUserInfo = async (body) => {
    var req = await axios.post('/api/patient/detail', body);
    return req.data;
}