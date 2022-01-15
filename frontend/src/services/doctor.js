import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"


export const registerDoctor = async (body) => {
    return await  axios.post('api/doctors/register', body)
    .then((response) => response.data)
    .catch(error => error)
}

export const loginDoctor = async (body) => {
    return await  axios.post('/api/doctors/login', body)
    .then((response) => response.data)
    .catch(error => error)
}

export const detailDoctor = async (body) => {
    return await  axios.post('/api/doctors/detail', body)
    .then((response) => response.data)
    .catch(error => error)
}

export const getListDoctorByDepartment = async (body) => {
    return await  axios.post('/api/doctors/getListByDepartment', body)
    .then((response) => response.data)
    .catch(error => error)
}

