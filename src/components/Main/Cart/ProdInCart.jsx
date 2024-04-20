import MinusPlusBtn from "../../MinusPlusBtn";
import { CartState, CartDispatch, OverlayDispatch, OverlayState } from "../../../services/service";
import { useContext } from 'react';

function ProdInCart({ data }) {
    const overlayData = useContext(OverlayState)
    const overlayEdit = useContext(OverlayDispatch)
    const cartEdit = useContext(CartDispatch)
    const cartData = useContext(CartState)
    let id = cartData.find(item => item.id == data.id)
    
    function incQnt() {
        if (id) {
            cartEdit({ type: 'edit', data: { ...id, qnt: id.qnt + 1 } })
        } else {
            overlayEdit({ ...overlayData, data: { ...overlayData.data, qnt: overlayData.data.qnt + 1 } })
        }
    }

    function decQnt() {
        if (id) {
            if (id.qnt < 2) {
                return
            } else {
                cartEdit({ type: 'edit', data: { ...overlayData.data, qnt: id.qnt - 1 } })
            }

        } else {
            if (overlayData.data.qnt < 2) {
                return
            } else {
                overlayEdit({ ...overlayData, data: { ...overlayData.data, qnt: overlayData.data.qnt - 1 } })
            }
        }
    }

    return (
        <li>
            <img src={data.imgpath} />
            <section>
                <p>{data.title}</p>
                <p>{data.weight}г</p>
                <p>{data.price}грн</p>
            </section>
            <MinusPlusBtn dec={decQnt} inc={incQnt} state={data} />
        </li>
    )
}

export default ProdInCart