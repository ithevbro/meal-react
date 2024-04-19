import style from './minusplusbtn.module.css'
import { useContext, useState } from 'react'
import { CartDispatch, CartState, OverlayState } from '../services/service'
// { qnt, incQnt, decQnt, data }
function MinusPlusBtn() {
    const cartEdit = useContext(CartDispatch)
    const cartData = useContext(CartState)
    const overlayData = useContext(OverlayState).data
    let id = cartData.find(item => item.id == overlayData.id)
    const [qnt, setQnt] = useState(id?.qnt || 1)

    function globalCounter(type) {
        console.log(overlayData);
        if (type == '+') {
            setQnt(qnt + 1)
            // cartEdit({ type: 'edit', data: { ...data, qnt: qnt } })
        } else {
            if (qnt < 2) {
                return
            } else {
                setQnt(qnt - 1)
            }
        }
    }

    return (
        <div className={style.minus_plus}>
            <button onClick={() => { globalCounter('-') }}>-</button>
            <div>{qnt}</div>
            <button onClick={() => { globalCounter('+') }}>+</button>
        </div>
    )
}

export default MinusPlusBtn