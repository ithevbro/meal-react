import { createContext } from "react";
const OverlayState = createContext(null);
const OverlayDispatch = createContext(null);
const cartState = createContext(null);
const cartDispatch = createContext(null);

async function getProducts(url) {
    let res = await fetch(`http://localhost:3000${url}`)
    return await res.json()
}

function overlayReducer(state, action) {
    if (action.type == 'product') {
        return action
    } else if (action.type == 'delivery') {
        return action
    } else {
        return false
    }
}


function cartReducer(state, action) {

}

export { getProducts, overlayReducer, OverlayState, OverlayDispatch }