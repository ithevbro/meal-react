import style from './singleprod.module.css'
import MinusPlusBtn from "../MinusPlusBtn";
import { OverlayState } from '../../services/service';
import { useContext } from 'react';

function SingleProd() {
    const data = useContext(OverlayState).data

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
                <button className="btn-darkorange">Добавить</button>
                <MinusPlusBtn />
                <p>
                    {data.price}грн
                </p>
            </div>

        </div>
    )

}

export default SingleProd