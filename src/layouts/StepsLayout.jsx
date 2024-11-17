import { Outlet } from "react-router-dom"
import Header from "../components/registration/Header"
import Footer from "../components/registration/Footer"

function StepsLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default StepsLayout