import React from 'react'
import reactlogo from '../assets/react.png'
import htmllogo from '../assets/html.png'
import typescriptlogo from '../assets/typescript.png'
import csslogo from '../assets/css.png'
import jslogo from '../assets/javascript.png'
import nodejslogo from '../assets/nodejs.png'
import reduxlogo from '../assets/redux.png'
import mongodblogo from '../assets/mongodb.jpg'
import phplogo from '../assets/php.png'
import mysqllogo from '../assets/mysql.png'

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills section">
                <div className="section__header container">
                    <span className="section__subtitle">Skills</span>
                    <h2 className="section__title">Some of My Working Tools
                    </h2>
                </div>
                <div className="d-grid skills__wrapper container">

                    <div className="skills__content">
                        <h3 className="skills__title">Frontend Development</h3>
                        <div className="skills__content-wrapper">
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={reactlogo} alt=" React  Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">React</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={typescriptlogo} alt="Vue.js Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">TypeScript</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={reduxlogo} alt="Redux Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">Redux</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={htmllogo} alt="HTML Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={csslogo} alt="CSS Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">CSS</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={jslogo} alt="JavaScript Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content">
                        <h3 className="skills__title">Backend Development</h3>
                        <div className="skills__content-wrapper">
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={nodejslogo} alt="Node.Js Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">Node.Js</h3>
                            </div>

                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={mongodblogo} alt="MongoDB Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">MongoDB</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={phplogo} alt="php Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">PHP</h3>
                            </div>
                            <div className="skills__card">
                                <div className="skills__img-wrapper">
                                    <img src={mysqllogo} alt="MySQL Logo" className="skills__img" />
                                </div>
                                <h3 className="skills__name">MySQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Skills