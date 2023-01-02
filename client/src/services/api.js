import axios from 'axios'

export const BASE_URL = 'http://localhost:8000/'


const Client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": "JWT " + localStorage.getItem('access_token'),
        "Content-Type": "application/json",
        "accept": "application/json"
    }
 })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if ('token') {
            console.log('token exists')
            console.log(token)
            config.headers['authorization'] = `Bearer${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default Client