import style from './singleprod.module.css'
import MinusPlusBtn from "../MinusPlusBtn";
import { OverlayState, CartDispatch, OverlayDispatch, CartState } from '../../services/service';
import { useContext, useState } from 'react';

function SingleProd() {
    const data = useContext(OverlayState).data
    const cartEdit = useContext(CartDispatch)
    const overlayClose = useContext(OverlayDispatch)
    const cartData = useContext(CartState)
    let id = cartData.find(item => item.id == data.id)
    const [qnt, setQnt] = useState(id?.qnt || 1)

    function addToCart() {
        if (id) {
            cartEdit({ type: 'edit', data: { ...data, qnt: qnt } })
        } else {
            cartEdit({ type: 'add', data: { ...data, qnt: qnt, inCart: true } })
        }
    }
    
    function incQnt() {
        setQnt(qnt + 1)
    }
    function decQnt() {
        if (qnt < 2) {
            return
        } else {
            setQnt(qnt - 1)
        }
    }

    return (
        <div className={style.single_product}>
            <h2>
                Мясная бомба
            </h2>
            <figure>
                <div className={style.prod_img_wrap}>
                    <img src={data.imgpath} alt="" />
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
                <button onClick={() => {
                    overlayClose(false)
                    addToCart()
                }} className="btn-darkorange">Добавить</button>
                <MinusPlusBtn qnt={qnt} incQnt={incQnt} decQnt={decQnt} data={cartData || data} />
                <p>
                    {data.price}грн
                </p>
            </div>

        </div>
    )

}

export default SingleProd