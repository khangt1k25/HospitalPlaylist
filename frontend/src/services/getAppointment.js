import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export const getAppointmentOfDoctor = async (body) => {
    
    return await axios.post('api/appointments/getAppointmentOfDoctor', body)
    .then((response) => response.data)
    .catch(error => error)
}



export const createAppointment = async (body) => {
    return await axios.post('/api/appointments/create', body)
    .then((response) => response.data)
    .catch(error => error)
}

export const getAppointmentOfUser = async (body) => {
    
    return await axios.post('api/appointments/getAppointmentOfUser', body)
    .then((response) => response.data)
    .catch(error => error)
}
