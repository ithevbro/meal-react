import style from './delivery.module.css'
import modalimg from '/src/assets/modal-logo.png'

function Delivery() {

    return (
        <div className={style.delivery_modal}>
            <div>
                <img src={modalimg} alt="" />
            </div>
            <form>
                <div className={style.form_wrapper}>
                    <h3>Доставка</h3>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Телефон" />
                    <div className={style.radio_btns}>
                        <label htmlFor="samoviviz">
                            <input
                                defaultChecked=""
                                type="radio"
                                name="deliver"
                                id="samoviviz"
                            />
                            Самовывоз
                        </label>
                        <label htmlFor="dostavka">
                            <input type="radio" name="deliver" id="dostavka" />
                            Доставка
                        </label>
                    </div>
                    <div id={style.delivery_address}>
                        <input type="text" placeholder="Улица, дом, квартира" />
                        <div>
                            <input type="text" placeholder="Этаж" />
                            <input type="text" placeholder="Домофон" />
                        </div>
                    </div>
                    <button type="submit" className="btn-darkorange">
                        Оформить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Delivery