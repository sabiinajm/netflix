import { Outlet } from "react-router-dom"
import AccHeader from "../components/header/AccHeader"

function AccLayout() {
    return (
        <>
            <AccHeader/>
            <Outlet/>
        </>
    )
}
export default AccLayout