import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="d-grid footer__wrapper container">
                    <div className="footer__content">
                        <h4 className="footer__name">Sushmitha S</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#home" className="footer__link">Home</a>
                            </li>

                            <li className="footer__item">
                                <a href="#portfolio" className="footer__link">Portfolio</a>
                            </li>

                            <li className="footer__item">
                                <a href="#skills" className="footer__link">Skills</a>
                            </li>

                            <li className="footer__item">
                                <a href="#contact" className="footer__link">Contact</a>
                            </li>
                        </ul>
                        <ul className="social__list">

                            <li className="social__item">
                                <a href="http://www.linkedin.com/in/sushmithass" target='__blank' className="social__link">
                                    <i className="ri-linkedin-fill" />
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://github.com/Sushmitha-SK" target='__blank' className="social__link">
                                    <i className="ri-github-fill" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright container">
                    <p>© Copyright 2024 | Created by Sushmitha S | All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
