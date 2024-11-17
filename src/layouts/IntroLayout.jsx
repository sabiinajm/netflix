import { Outlet } from "react-router-dom"
import Header from "../components/intoductionPage/Header"
import Footer from "../components/intoductionPage/Footer"

function IntroLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default IntroLayout