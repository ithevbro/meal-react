import style from "./product.module.css"

function Product({ data }) {
    return (
        <li className={style.prod}>
            <img src={data.imgpath} alt="" />
            <p>{data.price}грн</p>
            <p>{data.title}</p>
            <p>{data.weight}</p>
            <button>Добавить</button>
        </li>
    )
}

export default Product