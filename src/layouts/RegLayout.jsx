import { Outlet } from "react-router-dom"
import RegHeader from "../components/header/RegHeader"
import RegFooter from "../components/footer/RegFooter"

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