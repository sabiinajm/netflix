import axios from "axios"
import axiosInstance from "./instance"

async function getData() {
    const res = await axiosInstance.get()
    return res.data.results
}

export {getData}