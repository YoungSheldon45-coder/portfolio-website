import React from 'react'
import { home } from '../data/dummydata'
import TypewriterComponent from 'typewriter-effect'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {
          home.map((val, i) => (
            <div className='heroContainer' key={i}>
              <h3 data-aos="fade-right">
                {val.text}
              </h3>
              <h1>
                <TypewriterComponent options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true, loop: true
                }} />
              </h1>
              <p data-aos="fade-left" style={{color: 'white', fontSize: '16px'}}>{val.desc}</p>
              
              <a href='/myCV.pdf' download='MyCV.pdf' className='hero-link'>
                <button className='primaryBtn' >Download CV</button>
              </a>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Hero
