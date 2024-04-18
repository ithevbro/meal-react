import { useState } from "react"
import style from "./cart.module.css"
import delimg from '/src/assets/delivery.png';
import ProdInCart from "./ProdInCart";
import { OverlayState, OverlayDispatch } from "../../../services/service";
import { useContext } from "react";

function Cart() {
    const [classTogle, setclassTogle] = useState(true)
    const [show, setShow] = useState(true)
    const state = useContext(OverlayState)
    const dispatch = useContext(OverlayDispatch)

    function checkOut() {
        dispatch({ type: 'delivery', data: 'loh' })
    }

    function hideDelivery() {
        setclassTogle(!classTogle)
        setTimeout(() => {
            setShow(false)
        }, 400)
    }
    function showDelivery() {
        if (!show) {
            setclassTogle(!classTogle)
            setShow(true)
        }
    }

    return (
        <aside onClick={showDelivery} className={style.cart_wrapper}>
            <div className={style.cart_count_wrapper}>
                <h3>Корзина</h3>
                <p>0</p>
            </div>
            <p className={style.cart_empty}>Тут пока пусто :(</p>
            <div className={classTogle ? `${style.wrapper} ${style.is_open}` : style.wrapper}>
                <div className={style.inner}>
                    <ul id={style.cart_products}>
                        <ProdInCart />
                        <ProdInCart />
                    </ul>
                    <div id="checkout-wrapper">
                        <div id={style.checkout}>
                            <span>Итого</span> <span id="cart-total-price">0</span>
                        </div>
                        <button onClick={checkOut} id="makeorder" className="btn-darkorange">
                            Оформить заказ
                        </button>
                        <div className={style.delivery}>
                            <div id={style.free_delivery}>
                                <img src={delimg} alt="" />
                                Бесплатная доставка
                            </div>
                            <button onClick={hideDelivery} id="hide-delivery">Свернуть</button>
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default Cart