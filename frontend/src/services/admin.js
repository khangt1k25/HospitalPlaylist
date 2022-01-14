import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

// export const registerDoctor = async(body) => {
//     const promise = await axios.post('api/doctors/register/', body)
//     return promise.data
// }

export const getListUser = async (body) => {
    return await  axios.post('/api/patient/getList', body).then((response) => response.data)
}

// export const getListDoctor = async (body) => {
//     return await  axios.post('/api/doctors/login', body).then((response) => response.data)
// }