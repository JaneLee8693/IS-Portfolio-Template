import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {GiBambooFountain} from 'react-icons/gi'
import './Experience.css'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills gained from</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_meta">
          <h3><TbBrandMeta/>Meta</h3>
          <h4>Software Engineer Intern</h4>
          <h4><small className='text-light'>Jun 2022-Aug 2022</small></h4>
          <div className='experience__content'>
            <acticle className='experience__details'>
              <h5>Created reports and dashboards using inhouse tool Sequentra and provided insights on feature 
enhancement.</h5>
            </acticle>
            <acticle className='experience__details'>
              <h5>Worked on data migration process with data segmentation & aggregation, moving client data 
inhouse for 50k records.</h5>
            </acticle>
            <acticle className='experience__details'>
              <h5>Developed a predictive model with Time Series to create business insights and visualizations 
through Tableau.</h5>
            </acticle>
          </div>
        </div>
        <div className='experience__bamboo'>
          <h3><GiBambooFountain/>BambooHR</h3>
          <h4>Software Engineer Intern</h4>
          <h4><small className='text-light'>Feb 2021-Nov 2021</small></h4>
          <div className='experience__content'>
            <acticle className='experience__details'>
              <h5>Engineered backend infrastructure for login and user authorization for a mobile application by
building 4 endpoints for Restful API with Unit Test Integration using Node.js and Apigee.</h5>
            </acticle>
            <acticle className='experience__details'>
              <h5>Collaborated with four interns and Learning & Development team to build a recommendation 
engine using R.</h5>
            </acticle>
          </div>
        </div>
      </div>
    </section>
  )
}
