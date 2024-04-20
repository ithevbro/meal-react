import style from './minusplusbtn.module.css'
import { CartDispatch, OverlayDispatch, OverlayState } from '../services/service'
import { useContext } from 'react'

function MinusPlusBtn({ state, id }) {
    const overlayData = useContext(OverlayState)
    const overlayEdit = useContext(OverlayDispatch)
    const cartEdit = useContext(CartDispatch)

    function incQnt() {
        if (id) {
            cartEdit({ type: 'edit', data: { ...id, qnt: state.qnt + 1 } })
        } else {
            overlayEdit({ ...overlayData, data: { ...overlayData.data, qnt: overlayData.data.qnt + 1 } })
        }
    }

    function decQnt() {
        if (id) {
            if (id.qnt < 2) {
                return
            } else {
                cartEdit({ type: 'edit', data: { ...id, qnt: id.qnt - 1 } })
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
        <div className={style.minus_plus}>
            <button onClick={decQnt}>-</button>
            <div>{state.qnt}</div>
            <button onClick={incQnt}>+</button>
        </div>
    )
}

export default MinusPlusBtn