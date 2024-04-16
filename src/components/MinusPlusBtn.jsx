import style from './minusplusbtn.module.css'

function MinusPlusBtn() {
    return (
        <div className={style.minus_plus}>
            <button>-</button>
            <div>1</div>
            <button>+</button>
        </div>
    )
}

export default MinusPlusBtn