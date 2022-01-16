import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"


export const getListUser = async () => {
    var req =  await  axios.get('/api/patient/getList');
    return req.data;
}


export const getListDoctor = async () => {
    var req = await axios.get('/api/doctors/getList');
    // console.log(req);
    return req.data;
}

export const getCountAppointmentByYear = async (body) => {
    var req = await axios.post('/api/appointments/getList', body);
    return req.data;
}

export const getCountAppointmentPending = async (body) => {
    var req = await axios.post('/api/appointments/getByStatus', body);
    return req.data;
}

export const deleteDoctorById = async (body) => {
    var req = await axios.post('api/doctors/delete', body);
    return req;
}