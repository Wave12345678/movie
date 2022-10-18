import React from 'react'
import facebook from '../../img/facebook.png'
import insta from '../../img/insta.png'
import twitter from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import './footer.css'


export default function footer() {
    return (
        <div className='footer'>
            <div className="footer__soc-icon">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="Instagramm" className='social-icon' />
                <img src={twitter} alt="Twitter" className='social-icon' />
                <img src={youtube} alt="Youtube" className='social-icon' />
            </div>

            <div className="footer__nav">
                <p className="footer__nav-text">Conditions of Use</p>
                <p className="footer__nav-text">Privacy & Policy</p>
                <p className="footer__nav-text">Press Room</p>
            </div>

            <p className="footer__bottom">© 2021 MovieBox by Adriana Eka Prayudha  </p>

        </div>
    )
}
