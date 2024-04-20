import style from './minusplusbtn.module.css'

function MinusPlusBtn({ state, inc, dec }) {
    return (
        <div className={style.minus_plus}>
            <button onClick={dec}>-</button>
            <div>{state.qnt}</div>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default MinusPlusBtn