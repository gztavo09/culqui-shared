import router from '@/router';
import axios from 'axios'

const serviceApi = axios.create({
    baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app'
})

serviceApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response.status == 403) router.push("/login")
        return Promise.reject(error);
    }
);

export default serviceApi