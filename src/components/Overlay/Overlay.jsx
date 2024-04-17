import style from './overlay.module.css'
import Delivery from './Delivery'
import SingleProd from './SingleProd'

function Overlay() {
    return (
        <div id={style.overlay}>
            <div className={style.overlay_control}>
                <Delivery />
                <SingleProd />
                <span id={style.close_overlay} />
            </div>
        </div>
    )
}

export default Overlay