import React from 'react'
import flavorblends from '../assets/flavorblends.jpg'
import newsinsight from '../assets/newsinsight.jpg'
import taskoptima from '../assets/taskoptima.jpg'
import designingwise from '../assets/designingwise.jpg'
import portfolio from '../assets/portfolio.jpg'
import bugtrace from '../assets/BugTrace.jpg'

const Portfolio_Section = () => {
  return (
    <>
      <section id="portfolio" className="portfolio section section-bg ">
        <div className="section__header container">
          <span className="section__subtitle">Portfolio</span>
          <h2 className="section__title">Featured Projects</h2>
        </div>
        <div className="d-grid portfolio__wrapper container">
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={taskoptima} alt="Website Design" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">TaskOptima</h3>
                <p className="portfolio__description">
                  Task Management System web app developed using React JS, Redux and Material UI
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/TaskManagementSystem-TaskOptima.git"
              className="portfolio__link" target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={flavorblends} alt="Food Recipe App" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">Flavor Blends</h3>
                <p className="portfolio__description">
                  A Food Recipe App developed using TypeScript
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/Flavor-Blends-Recipe-App.git" className="portfolio__link"
              target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={newsinsight} alt="News App" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">Newsinsight</h3>
                <p className="portfolio__description">
                  A news app developed using ReactJS and Redux
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/Newsinsight-News-App.git" className="portfolio__link"
              target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={portfolio} alt="Personal Portfolio" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">Portfolio</h3>
                <p className="portfolio__description">
                  Portfolio, a personal portfolio page developed using TypeScript and CSS
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/personal-portfolio.git" className="portfolio__link"
              target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={bugtrace} alt="Bug Trace" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">Bug Trace</h3>
                <p className="portfolio__description">
                  Bug Trace web app developed using MERN Stack.
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/BugTrace-BugTrackingSystem.git" className="portfolio__link"
              target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
          <div className="portfolio__project">
            <div className="portfolio__overlay" />
            <img src={designingwise} alt="Designing Wise" className="portfolio__img" />
            <div className="portfolio__info">
              <div className="portfolio__info-wrapper">
                <h3 className="portfolio__title">Designing Wise</h3>
                <p className="portfolio__description">
                  Designing Wise, an interior design landing page developed using HTML, CSS and JavaScript
                </p>
              </div>
            </div>
            <a href="https://github.com/Sushmitha-SK/Designing-Wise.git" className="portfolio__link" target="_blank">
              <i className="ri-external-link-line" />
            </a>
          </div>
        </div>


      </section>
    </>
  )
}

export default Portfolio_Section