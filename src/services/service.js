import { createContext } from "react";
const OverlayState = createContext(null);
const OverlayDispatch = createContext(null);
const CartState = createContext(null);
const CartDispatch = createContext(null);

async function getProducts(url) {
    let res = await fetch(`http://localhost:3000${url}`)
    return await res.json()
}

function overlayReducer(state, action) {
    if (action.type == 'product') {
        console.log(action);
        return {...action,}
    } else if (action.type == 'delivery') {
        return action
    } else {
        return false
    }
}

function cartReducer(state, action) {
    if (action.type == 'add') {
        let id = state.find(item => item.id == action.data.id)
        if (id) {
            return state
        } else {
            return [...state, action.data]
        }
    } else if (action.type == 'edit') {
        return state.map(item => {
            if (item.id == action.data.id) {
                return action.data;
            } else {
                return item
            }
        })

    } else if (action.type == 'del') {

    }
}

export { getProducts, overlayReducer, OverlayState, OverlayDispatch, cartReducer, CartState, CartDispatch }