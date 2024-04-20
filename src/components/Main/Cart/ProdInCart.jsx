import MinusPlusBtn from "../../MinusPlusBtn";
import { CartState } from "../../../services/service";
import { useContext } from 'react';

function ProdInCart({ data }) {
    const cartData = useContext(CartState)
    let id = cartData.find(item => item.id == data.id)

    return (
        <li>
            <img src={data.imgpath} />
            <section>
                <p>{data.title}</p>
                <p>{data.weight}г</p>
                <p>{data.price}грн</p>
            </section>
            <MinusPlusBtn state={data} id={id} />
        </li>
    )
}

export default ProdInCart