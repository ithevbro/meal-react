import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Overlay from "./Overlay/Overlay"
import { OverlayDispatch, OverlayState, overlayReducer } from "../services/service"
import { useReducer } from "react"

function Layout() {
    const [state, dispatch] = useReducer(overlayReducer, false);

    return (
        <OverlayState.Provider value={state}>
            <OverlayDispatch.Provider value={dispatch}>
                <Header />
                <Outlet />
                <Overlay />
            </OverlayDispatch.Provider >
        </OverlayState.Provider >
    )
}

export default Layout

