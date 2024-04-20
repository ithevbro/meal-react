import Header from "./Header/Header"
import { Outlet } from "react-router-dom"
import Overlay from "./Overlay/Overlay"
import { OverlayDispatch, OverlayState, overlayReducer, CartState, CartDispatch, cartReducer } from "../services/service"
import { useReducer } from "react"

function Layout() {
    const [state, dispatch] = useReducer(overlayReducer, { overlayOn: false });
    const [cartState, cartDispatch] = useReducer(cartReducer, [])

    return (
        <CartState.Provider value={cartState}>
            <CartDispatch.Provider value={cartDispatch}>
                <OverlayState.Provider value={state}>
                    <OverlayDispatch.Provider value={dispatch}>
                        <Header />
                        <Outlet />
                        <Overlay />
                    </OverlayDispatch.Provider >
                </OverlayState.Provider >
            </CartDispatch.Provider>
        </CartState.Provider>
    )
}

export default Layout

