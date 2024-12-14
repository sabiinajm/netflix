import { Outlet, useLocation } from "react-router-dom"
import AccHeader from "../components/header/AccHeader"
import AccFooter from "../components/footer/accFooter"
import { useEffect, useState } from "react";

function AccLayout() {
    const location = useLocation();
    const isTvShowsPage = location.pathname === "/browse";
    const [showHeader, setShowHeader] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    useEffect(() => {
        if (location.pathname === "/video") {
            setShowHeader(false);
            setShowFooter(false);
        } else {
            setShowHeader(true);
            setShowFooter(true);
        }
    }, [location]);
    return (
        <>
            <AccHeader showHeader={showHeader} bgColor={!isTvShowsPage ? "bg-[#141414]" : ""} />
            <Outlet />
            <AccFooter showFooter={showFooter} />
        </>
    )
}
export default AccLayout