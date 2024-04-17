import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Overlay from "./Overlay/Overlay"

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Overlay />
        </>
    )
}

export default Layout