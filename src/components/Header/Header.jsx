import './Header.css'
import logo from '../../img/logo.svg'
import searchIcon from '../../img/HeaderSearch.png'
import headerMenu from '../../img/HeaderMenu.png'
import imdb from '../../img/imdb.png'
import tomato from '../../img/tomatoIcon.png'
import Watch_trailer from '../../img/watchTrailerBtn.png'

export default function header() {
    return (
        <div>
            <div className="header__top">
                <div className="header__logo">
                    <img src={logo} alt="logo" className='logo-img' />
                    <p className="logo-text">MovieBox</p>
                </div>

                <div className="header__search">
                    <div className="header-input">
                        <input type="text" placeholder='What do you want to watch?' className='header-input__area' />
                        <img src={searchIcon} alt="search" className='header__search-icon' />

                    </div>
                </div>

                <div className="header-nav">
                    <p className="header-nav__sign-in">Sign in</p>
                    <img src={headerMenu} alt="" className='header-nav__menubar' />
                </div>
            </div>

            <div className="hero">
                <h1 className="hero__title">John Wick 3 : <br />Parabellum</h1>
                <div className="hero__ranking">
                    <div className="imdb">
                        <img src={imdb} alt="" />
                        <p className="imdb__text">86.0 / 100</p>
                    </div>
                    <div className="tomato-ranking">
                        <img src={tomato} alt="" />
                        <p className="tomato-ranking__text1">97%</p>
                    </div>
                </div>
                <p className="hero__text">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <img src={Watch_trailer} alt="" className='hero__btn' />
            </div>
        </div>
    )
}
