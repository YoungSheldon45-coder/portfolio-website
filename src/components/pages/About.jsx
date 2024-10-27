import React from 'react'
import { about } from '../data/dummydata'
import Heading from '../common/Heading'

const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container flex">
          {
            about.map((val, i) => (
              <>
                <div className="left">
                  <img src={val.cover} alt="" className='profile' data-aos="fade-down-right" data-aos-easing="linear"/>
                </div>
                <div className="right" data-aos="fade-down-left" data-aos-easing="linear">
                  <Heading title='About Me' />
                  <p style={{color: 'white'}}>{val.desc}</p>
                  <p>{val.desc1}</p>

                  {/* First Download CV button */}
                  <a href='/myCV.pdf' download='MyCV.pdf'>
                    <button className='about-button'>Download CV</button>
                  </a>

                  
                </div>
              </>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default About
