import React from 'react'
import { social } from '../data/dummydata'

const Footer = () => {
  return (
    <footer>
        {social.map((item) => (
            <>
                <i data-aos="zoom-in-left">{item.icon}</i>
            </>
        ))}
        <p data-aos="zoom-in-right">All Right Reserved 2024</p>
    </footer>
  )
}

export default Footer