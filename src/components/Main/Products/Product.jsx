import style from "./product.module.css"
import { useContext } from "react"
import { OverlayDispatch, OverlayState } from "../../../services/service"

function Product({ data }) {
    // const stan = useContext(OverlayState)
    const dispatch = useContext(OverlayDispatch)

    function openOverlay() {
        dispatch({ type: 'product', data: data })
    }
    return (
        <li className={style.prod}>
            <img src={data.imgpath} alt="" />
            <p>{data.price}грн</p>
            <p>{data.title}</p>
            <p>{data.weight}</p>
            <button onClick={openOverlay}>Добавить</button>
        </li>
    )
}

export default Product