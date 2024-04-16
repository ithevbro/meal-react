import Product from "./Product"
import style from "./productList.module.css"
import { getProducts } from "/src/services/service"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function ProductList() {
    const [products, setProducts] = useState()
    let url = useLocation().pathname

    useEffect(() => {
        let ignore = false;
        getProducts(url).then(d => {
            if (!ignore) {
                setProducts(d)
            }

        })
        return () => {
            ignore = true;
        };
    }, [url])

    let prods = products && products.map(item => {
        return <Product key={item.id} data={item} />
    })

    return (
        <section>
            <h2 id={style.type_of_products}>Бургеры</h2>
            <ul id={style.menudata}>{prods}</ul>
        </section>
    )
}

export default ProductList