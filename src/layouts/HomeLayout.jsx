import { Outlet } from "react-router-dom"
import Footer from "../components/homepage/Footer"

function HomeLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
export default HomeLayout