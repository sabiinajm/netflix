import { Outlet } from "react-router-dom"
import RegHeader from "../components/header/RegHeader"
import RegFooter from "../components/footer/RegFooter"

function StepsLayout() {
    return (
        <>
            <RegHeader />
            <Outlet />
            <RegFooter />
        </>
    )
}
export default StepsLayout