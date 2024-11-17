import { Outlet } from "react-router-dom"
import Footer from "../components/homepage/Footer"
import Header from "../components/homepage/Header"

function HomeLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default HomeLayout