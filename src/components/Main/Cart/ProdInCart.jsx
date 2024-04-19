import MinusPlusBtn from "../../MinusPlusBtn";

function ProdInCart({ data }) {

    return (
        <li>
            <img src={data.imgpath} />
            <section>
                <p>{data.title}</p>
                <p>{data.weight}г</p>
                <p>{data.price}грн</p>
            </section>
            <MinusPlusBtn qnt={data.qnt} />
        </li>
    )
}

export default ProdInCart