import React from 'react'
import Heading from '../common/Heading'
import { services } from '../data/dummydata'

const Services = () => {
  return (
    <section className='services'>
        <div className="container">
            <Heading title='Services' />
            <div className="container grid3">
                {
                    services.map((item, i) => (
                        <div className="box" data-aos="flip-left" data-aos-easing="linear">
                            <i>{item.icon}</i>
                            <p>{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services