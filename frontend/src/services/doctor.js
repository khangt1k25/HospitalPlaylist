import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

// export const registerDoctor = async(body) => {
//     const promise = await axios.post('api/doctors/register/', body)
//     return promise.data
// }

export const registerDoctor = async (body) => {
    return await  axios.post('api/doctors/register', body).then((response) => response.data)
}

export const loginDoctor = async (body) => {
    return await  axios.post('/api/doctors/login', body).then((response) => response.data)
}


