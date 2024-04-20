import style from './singleprod.module.css'
import MinusPlusBtn from "../MinusPlusBtn";
import { OverlayState, CartDispatch, OverlayDispatch, CartState } from '../../services/service';
import { useContext } from 'react';

function SingleProd() {
    const overlayData = useContext(OverlayState)
    const overlayEdit = useContext(OverlayDispatch)
    const cartEdit = useContext(CartDispatch)
    const cartData = useContext(CartState)
    let id = cartData.find(item => item.id == overlayData.data.id)

    function addToCart() {
        if (id) {
            cartEdit({ type: 'edit', data: { ...id, qnt: id.qnt } })
            overlayEdit({ ...overlayData, overlayOn: false })
        } else {
            cartEdit({ type: 'add', data: { ...overlayData.data, inCart: true } })
            overlayEdit({ ...overlayData, overlayOn: false })
        }
    }

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
        <div className={style.single_product}>
            <h2>
                Мясная бомба
            </h2>
            <figure>
                <div className={style.prod_img_wrap}>
                    <img src={overlayData.data.imgpath} alt="" />
                </div>
                <figcaption>
                    <p>
                        Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.
                    </p>
                    <dl>
                        <dt>Состав:</dt>
                        <dd>Пшеничная булочка</dd>
                        <dd>Котлета из говядины</dd>
                        <dd>Красный лук</dd>
                        <dd>Листья салата</dd>
                        <dd>Соус горчичный</dd>
                    </dl>
                    <span>
                        520г, ккал 430
                    </span>
                </figcaption>
            </figure>
            <div className={style.single_product_btns}>
                <button onClick={addToCart} className="btn-darkorange">Добавить</button>
                <MinusPlusBtn dec={decQnt} inc={incQnt} state={id || overlayData.data} />
                <p>
                    {overlayData.data.price}грн
                </p>
            </div>

        </div>
    )

}

export default SingleProd