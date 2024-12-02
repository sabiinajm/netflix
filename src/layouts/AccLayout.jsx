import { Outlet, useLocation } from "react-router-dom"
import AccHeader from "../components/header/AccHeader"
import AccFooter from "../components/footer/accFooter"

function AccLayout() {
    const location = useLocation();
    const isTvShowsPage = location.pathname === "/browse";
    return (
        <>
            <AccHeader bgColor={!isTvShowsPage ? "bg-[#141414]" : ""}/>
            <Outlet/>
            <AccFooter />
        </>
    )
}
export default AccLayout