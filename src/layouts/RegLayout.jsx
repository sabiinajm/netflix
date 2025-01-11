import { Outlet } from "react-router-dom"
import RegHeader from "../components/header/RegHeader.jsx"
import RegFooter from "../components/footer/RegFooter.jsx"

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