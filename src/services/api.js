import axios from "axios"
import { axiosInstance, axiosInstance2, axiosInstance4, axiosInstance5 } from "./instance"
async function getData() {
    const res = await axiosInstance.get()
    return res.data.results
}
async function getTv() {
    const res = await axiosInstance2.get()
    return res.data.results
}
// async function getComingMovies() {
//     const res = await axiosInstance3.get()
//     return res.data.results
// }
async function topRatedMovies() {
    const res = await axiosInstance4.get()
    return res.data.results
}
async function topRatedTv() {
    const res = await axiosInstance5.get()
    return res.data.results
}

export { getData, getTv, topRatedMovies, topRatedTv }