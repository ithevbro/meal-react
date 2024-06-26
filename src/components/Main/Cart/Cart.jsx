import { useState } from "react"
import style from "./cart.module.css"
import delimg from '/src/assets/delivery.png';
import ProdInCart from "./ProdInCart";
import { OverlayDispatch, CartState } from "../../../services/service";
import { useContext } from "react";

function Cart() {
    const [classTogle, setclassTogle] = useState(true)
    const [show, setShow] = useState(true)
    const dispatch = useContext(OverlayDispatch)
    const cartData = useContext(CartState)

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

    function cartSum() {
        let sum = 0
        cartData.forEach(item => {
            sum += item.price * item.qnt
        });
        return sum
    }

    function cartQnt() {
        let qnt = 0
        cartData.forEach(item => {
            qnt += item.qnt
        });
        return qnt
    }

    let prods = cartData.map(item => <ProdInCart key={item.id} data={item} />) || []

    return (
        <aside onClick={showDelivery} className={style.cart_wrapper}>
            <div className={style.cart_count_wrapper}>
                <h3>Корзина</h3>
                <p>{cartQnt()}</p>
            </div>
            {cartData.length < 1 && <p className={style.cart_empty}>Тут пока пусто :(</p>}
            <div className={classTogle ? `${style.wrapper} ${style.is_open}` : style.wrapper}>
                <div className={style.inner}>
                    <ul id={style.cart_products}>
                        {prods}
                    </ul>
                    {cartData.length > 0 && <div id="checkout-wrapper">
                        <div id={style.checkout}>
                            <span>Итого</span> <span id="cart-total-price">{cartSum()}грн</span>
                        </div>
                        <button onClick={checkOut} id="makeorder" className="btn-darkorange">
                            Оформить заказ
                        </button>

                        <div className={style.delivery}>
                            {cartSum() > 1500 && <div id={style.free_delivery}>
                                <img src={delimg} alt="" />
                                Бесплатная доставка
                            </div>}
                            <button onClick={hideDelivery} id="hide-delivery">Свернуть</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </aside >
    )
}

export default Cart