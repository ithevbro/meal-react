import ProductList from "./Products/ProductList"
import style from "./main.module.css"
import Cart from "./Cart/Cart"

function MainBody() {
  
    return (
        <main className={style.main}>
            <div className={style.main_wrapper}>
                <Cart />
                <ProductList />
            </div>
        </main>
    )
}

export default MainBody