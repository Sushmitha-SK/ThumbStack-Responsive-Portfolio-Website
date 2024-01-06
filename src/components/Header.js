import React from 'react'

const Header = () => {

    return (
        <>
            <header id="header" className="header">
                <nav className="nav container">
                    <a href="" className="nav__brand">Sushmitha.</a>
                    <div className="nav__menu" id="nav-menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="ri-home-line nav__icon" />
                                    Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="ri-folders-line nav__icon" />
                                    Portfolio</a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="ri-medal-line nav__icon" />
                                    Skills</a>
                            </li>


                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="ri-phone-line nav__icon" />
                                    Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header