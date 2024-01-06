import React from 'react'
import heroimage from '../assets/coding.jpg'

const Home = () => {
    return (
        <>
            <section id="home" className="home">
                <div className="d-grid home__wrapper container">
                    <div className="home__content">
                        <h1 className="home__title">
                            I Am <span className="home__name">Sushmitha,</span><br />
                            <p style={{ color: '#D1884F' }}> Tester<br />&amp; Developer</p>
                        </h1>
                        <p className="home__description">
                            Exploring the Digital Realm with a Passion for Quality and Innovation
                        </p>
                        <a href="#contact" className="btn btn--primary">
                            <i className="ri-mail-line" />
                            Hire Me
                        </a>
                        <div className="social">
                            <ul className="social__list">
                                <li className="social__item">
                                    <a href="http://www.linkedin.com/in/sushmithass" className="social__link" target='__blank'>
                                        <i className="ri-linkedin-fill" />
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="https://github.com/Sushmitha-SK" className="social__link" target='__blank'>
                                        <i className="ri-github-fill" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={heroimage} alt="Sushmitha S" className="home__img" />
                </div>
            </section>
        </>
    )
}

export default Home