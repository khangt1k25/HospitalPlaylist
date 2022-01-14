import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

// export const registerDoctor = async(body) => {
//     const promise = await axios.post('api/doctors/register/', body)
//     return promise.data
// }

export const getListUser = async () => {
    var req =  await  axios.get('/api/patient/getList');
    return req.data;
}

// export const getListDoctor = async (body) => {
//     return await  axios.post('/api/doctors/login', body).then((response) => response.data)
// }
export const getListDoctor = async () => {
    var req = await axios.get('/api/doctors/getList');
    // console.log(req);
    return req.data;
}

export const getCountAppointmentByYear = async (body) => {
    var req = await axios.post('/api/appointments/getList', body);
    return req.data;
}