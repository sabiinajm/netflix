import { Outlet } from "react-router-dom"
import RegFooter from "../components/footer/RegFooter.jsx"
import RegHeader from "../components/header/RegHeader"

function RegLayout() {
    return (
        <>
            <RegHeader />
            <Outlet />
            <RegFooter />
        </>
    )
}
export default RegLayout