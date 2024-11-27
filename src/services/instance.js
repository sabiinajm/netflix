import axios from "axios";
import ConfigObj from "../config/config";


const axiosInstance = axios.create({
    baseURL: ConfigObj.baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
})
const axiosInstance2 = axios.create({
    baseURL: ConfigObj.baseUrl2,
    headers: {
        "Content-Type": "application/json",
    }
})

export { axiosInstance, axiosInstance2 }