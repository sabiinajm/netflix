import { Outlet } from "react-router-dom"
import Header from "../components/header/IntroHeader"
import Footer from "../components/footer/IntroFooter"

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