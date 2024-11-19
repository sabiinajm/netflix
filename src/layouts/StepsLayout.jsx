import { Outlet } from "react-router-dom"
import Header from "../components/header/regHeader"
import Footer from "../components/footer/regFooter"

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