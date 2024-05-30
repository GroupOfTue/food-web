import axios from "axios";
import { error } from "jquery";

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    timeout: 300000
})

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        console.log('error api: ',error);
    }
)

export default instance
