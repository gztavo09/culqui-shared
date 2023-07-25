import axios from 'axios'

const serviceApi = axios.create({
    baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app'
})

export default serviceApi