import React from 'react'
import Heading from '../common/Heading'
import { blog } from '../data/dummydata'

const Blog = () => {
  return (
    <>
        <section className='blog'>
            <div className='container'>
                <Heading title='Blog'/> 
                <div className='content grid3-blog'>
                    {
                        blog.map((item) => {
                            return (

                                <div className='blog-card' data-aos="flip-left" data-aos-easing="linear">
                                    <a href={item.url} target='_blank' className='blog-link'>
                                        <div className="img" data-aos="flip-up" data-aos-easing="linear">
                                            <img src={item.cover} alt="item" data-aos="flip-down" data-aos-easing="linear"/>
                                        </div>
                                        <div className="text">
                                            <h3 data-aos="flip-right" data-aos-easing="linear">{item.title}</h3>
                                            <label data-aos="flip-left" data-aos-easing="linear">
                                               By {item.author} {item.date}
                                            </label>
                                            <p data-aos="fade-up-right" data-aos-easing="linear" className='blog-desc'>{item.desc}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog