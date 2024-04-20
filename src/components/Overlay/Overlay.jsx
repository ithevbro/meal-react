import style from './overlay.module.css'
import Delivery from './Delivery'
import SingleProd from './SingleProd'
import { useRef, useContext, useEffect } from 'react'
import { OverlayState, OverlayDispatch } from '../../services/service';

function Overlay() {
    const overlayNode = useRef()
    const overlayData = useContext(OverlayState)
    const dispatch = useContext(OverlayDispatch)

    useEffect(() => {
        if (overlayData.overlayOn) {
            overlayNode.current.style.display = ''
            document.documentElement.style.overflow = 'hidden'
        } else {
            overlayNode.current.style.display = 'none'
            document.documentElement.style.overflow = ''
        }
    }, [overlayData])

    function closeOverlay() {
        overlayNode.current.style.display = 'none'
        document.documentElement.style.overflow = ''
        dispatch({ ...overlayData, overlayOn: false })
    }

    return (

        <div id={style.overlay} ref={overlayNode}>
            <div className={style.overlay_control}>
                {overlayData.type == 'product' ? <SingleProd /> : overlayData.type == 'delivery' ? <Delivery /> : null}
                <span onClick={closeOverlay} id={style.close_overlay} />
            </div>
        </div>
    )
}

export default Overlay