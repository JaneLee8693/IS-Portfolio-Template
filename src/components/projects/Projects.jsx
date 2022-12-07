import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG5 from '../../assets/img/portfolio5.jpg'

export const Projects = () => {
  return (
    <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>React Portfolio Webpage</h3>
                <p>This MERN project was created to help display all of my work!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/JaneLee8693/BYU-IS-portfolio-demo" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/JaneLee8693/BYU-IS-portfolio-demo" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG3} alt="" />
                </div>
                <h3>Python Wordle Project</h3>
                <p>This Python project allows users to play the famous New York Times wordle game!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/tbacon20/wordle" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/tbacon20/wordle" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="" />
                </div>
                <h3>GoLang Random Team Generator</h3>
                <p>This GoLang project reads a csv of student names and generates random teams!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/tbacon20/GoTeamGenerator" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/tbacon20/GoTeamGenerator" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="" />
                </div>
                <h3>Java RoboCode Bot</h3>
                <p>In this epic Java project, I created robots to battle to the death with other killer robots!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/tbacon20/Robocode" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/tbacon20/Robocode" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="" />
                </div>
                <h3>Java Random Team Generator</h3>
                <p>This project reads a csv of student names and generates random teams!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/tbacon20/JavaTeamGenerator" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/tbacon20/JavaTeamGenerator" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG5} alt="" />
                </div>
                <h3>Payroll Web Portal</h3>
                <p>This full stack project makes it easy for teachers to pay their teaching and research assistants!</p>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/audreyjy/EmployeeDashboardProject" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/audreyjy/EmployeeDashboardProject" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
        </div>
    </section>
  )
}