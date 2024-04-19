import style from './minusplusbtn.module.css'

function MinusPlusBtn({ qnt, incQnt, decQnt }) {
    
    return (
        <div className={style.minus_plus}>
            <button onClick={decQnt}>-</button>
            <div>{qnt}</div>
            <button onClick={incQnt}>+</button>
        </div>
    )
}

export default MinusPlusBtn