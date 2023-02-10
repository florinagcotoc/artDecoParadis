import React from 'react'
import './Header.css'

function Header() {
    const currentPathname = window.location.pathname;

    return (
        <>
            <nav className="main-menu">
                <div className='menu-content'>
                    <div className='logo'>
                        <img src="/images/art-logo.png" className='logo-app' alt="Art Deco Logo"/>
                    </div>
                    <div className='left-menu'>
                        <ul className='elements-left-menu'>
                            <li><a href="/acasa" style={{ color: currentPathname  === '/acasa'? '#0C1020':'#8e8f91'}} >ACASA</a></li>
                            <li><a href="/produse" style={{ color: currentPathname  === '/produse'? '#0C1020':'#8e8f91'}}>PRODUSE</a></li>
                            <li><a href="/beneficii-licheni" style={{ color: currentPathname  === '/beneficii-licheni'? '#0C1020':'#8e8f91'}}>BENEFICII LICHENI</a></li>
                            <li><a href="/despre-noi" style={{ color: currentPathname  === '/despre-noi'? '#0C1020':'#8e8f91'}}>DESPRE NOI</a></li>
                            <li><a href="/contact" style={{ color: currentPathname  === '/contact'? '#0C1020':'#8e8f91'}}>CONTACT</a></li>
                        </ul>
                    </div>
                    <div className='right-menu'>
                        <ul className='elements-right-menu'>
                            <li><a href="/autentificare" style={{ color: currentPathname  === '/autentificare'? '#0C1020':'#8e8f91'}}>AUTENTIFICARE</a></li>
                            <li className='header-divider'></li>
                            <li><a href="/cos-cumparaturi" style={{ color: currentPathname  === '/cos-cumparaturi'? '#0C1020':'#8e8f91', display:'flex'}}>
                                <span className="header-cart">COS</span>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-contact-wrapper">
                    <ul className='header-contact'>
                        <li>
                            <a href='mailto:artdecoparadis@gmail.com' className='contact-mail'>
                                <i className="icon-contact fa-solid fa-envelope"></i>
                                <span className='contact-details'>Contact</span>
                                <span className='tooltip-contact-mail'>artdecoparadis@gmail.com</span>
                            </a>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <i className="icon-contact fa-solid fa-phone"></i>
                            <span className='contact-details'>0756 453 566</span>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <a href='https://www.instagram.com/artdecoparadis/' className='contact-instagram' target="_blank" rel="noopener noreferrer">
                                <i class="icon-contact fa-brands fa-instagram"></i>
                                <span className='contact-details'>@artdecoparadis</span>
                            </a>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <a href='https://www.facebook.com/ArtDecopARADis' className='contact-instagram' target="_blank" rel="noopener noreferrer">
                                <i class="icon-contact fa-brands fa-facebook"></i>
                                <span className='contact-details'>Art Deco pARADis</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='hamburger-menu-wrapper'>
                <div className="header-contact-wrapper-small-device">
                    <ul className='header-contact-small-device'>
                        <li>
                            <a href='mailto:artdecoparadis@gmail.com' className='contact-mail'>
                                <i className="icon-contact fa-solid fa-envelope"></i>
                                <span className='contact-details'>Contact</span>
                                <span className='tooltip-contact-mail'>artdecoparadis@gmail.com</span>
                            </a>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <i className="icon-contact fa-solid fa-phone"></i>
                            <span className='contact-details'>0756 453 566</span>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <a href='https://www.instagram.com/artdecoparadis/' className='contact-instagram' target="_blank" rel="noopener noreferrer">
                                <i class="icon-contact fa-brands fa-instagram"></i>
                                <span className='contact-details'>@artdecoparadis</span>
                            </a>
                        </li>
                        <li className='header-divider-contact'></li>
                        <li>
                            <a href='https://www.facebook.com/ArtDecopARADis' className='contact-instagram' target="_blank" rel="noopener noreferrer">
                                <i class="icon-contact fa-brands fa-facebook"></i>
                                <span className='contact-details'>Art Deco pARADis</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='menu-small-device'>
                    <label>
                        <input type="checkbox"/>
                        <div className='toggle'>
                            <span className='top-line common'></span>
                            <span className='middle-line common'></span>
                            <span className='bottom-line common'></span>
                        </div>
                        <div className='slide'>
                            <h3>Meniu</h3>
                            <ul>
                                <li className='menu-elements'><a href="/acasa" style={{ color: currentPathname  === '/acasa'? '#0C1020':<></>}} >ACASA</a></li>
                                <hr class="solid"></hr>
                                <li className='menu-elements'><a href="/produse" style={{ color: currentPathname  === '/produse'? '#0C1020':<></>}}>PRODUSE</a></li>
                                <hr class="solid"></hr>
                                <li className='menu-elements'><a href="/beneficii-licheni" style={{ color: currentPathname  === '/beneficii-licheni'? '#0C1020':<></>}}>BENEFICII LICHENI</a></li>
                                <hr class="solid"></hr>
                                <li className='menu-elements'><a href="/despre-noi" style={{ color: currentPathname  === '/despre-noi'? '#0C1020':<></>}}>DESPRE NOI</a></li>
                                <hr class="solid"></hr>
                                <li className='menu-elements'><a href="/contact" style={{ color: currentPathname  === '/contact'? '#0C1020':<></>}}>CONTACT</a></li>
                            </ul>
                        </div>
                    </label>
                    <div class="overlay"></div>
                </div>
            </div>
        </>
       
    )
}

export default Header
