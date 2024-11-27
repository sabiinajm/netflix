import axios from "axios"
import { axiosInstance, axiosInstance2 } from "./instance"
async function getData() {
    const res = await axiosInstance.get()
    return res.data.results
}
async function getTv() {
    const res = await axiosInstance2.get()
    return res.data.results
}

export { getData, getTv }