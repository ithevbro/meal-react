import headerLogo from '/src/assets/header-logo.png';
import style from './header.module.css'
import Nav from './Nav';

function Header() {
  
    return (
        <header>
            <section className={style.header_wrapper}>
                <img src={headerLogo} alt="header-logo" />
                <figure>
                    <div id={style.burger_logo}></div>
                    <figcaption>
                        <h1>
                            Только самые
                            <br />
                            <span>сочные бургеры!</span>
                        </h1>
                        <p>Бесплатная доставка от <span>599грн</span></p>
                    </figcaption>
                </figure>
            </section>
            <Nav />
        </header>
    )
}

export default Header