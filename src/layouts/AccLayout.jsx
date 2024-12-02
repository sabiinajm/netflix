import { Outlet } from "react-router-dom"
import AccHeader from "../components/header/AccHeader"
import AccFooter from "../components/footer/accFooter"

function AccLayout() {
    return (
        <>
            <AccHeader/>
            <Outlet/>
            <AccFooter />
        </>
    )
}
export default AccLayout