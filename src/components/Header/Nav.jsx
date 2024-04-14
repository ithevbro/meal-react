import style from './nav.module.css'
import Burger from '/src/assets/nav-icons/Burgers.png'
import Zakuska from '/src/assets/nav-icons/Zakuska.png'
import Hot_dog from '/src/assets/nav-icons/Hot-dog.png'
import Kombo from '/src/assets/nav-icons/Kombo.png'
import Shaurma from '/src/assets/nav-icons/Shaurma.png'
import Pizza from '/src/assets/nav-icons/Pizza.png'
import Vok from '/src/assets/nav-icons/Vok.png'
import Desert from '/src/assets/nav-icons/Desert.png'
import Souce from '/src/assets/nav-icons/Souce.png'
import { useState, useEffect, useRef } from 'react';

function Nav() {
    const [x, setX] = useState(0);
    const [isClicked, setIsClicked] = useState(false)
    const [move, setMove] = useState(0)
    const ul = useRef()

    function countGap() {
        let computedStyle = window.getComputedStyle(document.getElementById(style.nav_li_wrap));
        return parseInt(computedStyle.getPropertyValue('gap')) * (ul.current.children.length - 1)
    }

    function lengthOfNav() {
        let sumWidth = 0
        for (let i = 0; i < ul.current.children.length; i++) {
            sumWidth += ul.current.children[i].offsetWidth
        }
        return sumWidth
    }

    function lastElemetDistance() {
        return lengthOfNav() + countGap() - window.innerWidth + getPudding() * 2
    }

    function getPudding() {
        let computedStyle = window.getComputedStyle(document.querySelector('.' + style.nav_wrapper));
        return parseInt(computedStyle.getPropertyValue("padding-right"))
    }

    function onStart(e) {
        ul.current.style.transition = ''
        if (lengthOfNav() + countGap() + getPudding() * 2 > window.innerWidth) {
            setIsClicked(true)
            if (e.type == 'touchstart') {
                setX(e.targetTouches[0].clientX - move);
            } else {
                setX(e.clientX - move);
            }
            for (let i = 0; i < ul.current.children.length; i++) {
                ul.current.children[i].ondragstart = function () {
                    ul.current.children[i].onclick = () => {
                        return false
                    }
                    return false;
                };
            }
        }
        else {
            return
        }

    }

    function onMove(e) {
        if (isClicked) {
            if (e.type == 'touchmove') {
                setMove(e.targetTouches[0].clientX - x);
            } else {
                setMove(e.clientX - x);
            }
        }
    }

    function stopMove() {
        if (!isClicked) {
            return
        }
        setIsClicked(false)
        let first = ul.current.children[0].getBoundingClientRect().left - getPudding()
        if (first > 0) {
            ul.current.style.transition = 'all 0.4s'
            setMove(0)
        }
        let last = lastElemetDistance()
        if (move < -last) {
            ul.current.style.transition = 'all 0.4s'
            setMove(-last)
        }

        setTimeout(() => {
            for (let i = 0; i < ul.current.children.length; i++) {
                ul.current.children[i].onclick = () => {
                    return true
                }
            }
        });

    }

    useEffect(() => {
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', stopMove)
        document.addEventListener('touchmove', onMove)
        document.addEventListener('touchend', stopMove)
        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseup', stopMove)
            document.removeEventListener('touchmove', onMove)
            document.removeEventListener('touchend', stopMove)
        }
    }, [isClicked, x, move])

    return (
        <ul className={style.nav_wrapper} onMouseDown={(e) => { onStart(e) }} onTouchStart={(e) => { onStart(e) }}>
            <div style={{ transform: `translateX(${move}px)` }} id={style.nav_li_wrap} ref={ul}>
                <a href="/">
                    <li>
                        <img src={Burger} alt="" />
                        <span>Бургеры</span>
                    </li>
                </a>
                <a href="/zakuski">
                    <li>
                        <img src={Zakuska} alt="" />
                        <span>Закуски</span>
                    </li>
                </a>
                <a href="/hotdogs">
                    <li>
                        <img src={Hot_dog} alt="" />
                        <span>Хот-доги</span>
                    </li>
                </a>
                <a href="/kombo">
                    <li>
                        <img src={Kombo} alt="" />
                        <p>Комбо</p>
                    </li>
                </a>
                <a href="/shaurma">
                    <li>
                        <img src={Shaurma} alt="" />
                        <p>Шаурма</p>
                    </li>
                </a>
                <a href="/pizza">
                    <li>
                        <img src={Pizza} alt="" />
                        <p>Пицца</p>
                    </li>
                </a>
                <a href="/vok">
                    <li>
                        <img src={Vok} alt="" />
                        <p>Вок</p>
                    </li>
                </a>
                <a href="/deserts">
                    <li>
                        <img src={Desert} alt="" />
                        <p>Десерты</p>
                    </li>
                </a>
                <a href="/sauces">
                    <li>
                        <img src={Souce} alt="" />
                        <p>Соусы</p>
                    </li>
                </a>
            </div>
        </ul>
    )
}

export default Nav