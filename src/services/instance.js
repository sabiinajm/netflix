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
// const axiosInstance3 = axios.create({
//     baseURL: ConfigObj.baseUrl3,
//     headers: {
//         "Content-Type": "application/json",
//     }
// })
const axiosInstance4 = axios.create({
    baseURL: ConfigObj.baseUrl4,
    headers: {
        "Content-Type": "application/json",
    }
})
const axiosInstance5 = axios.create({
    baseURL: ConfigObj.baseUrl5,
    headers: {
        "Content-Type": "application/json",
    }
})

export { axiosInstance, axiosInstance2, axiosInstance4, axiosInstance5 }