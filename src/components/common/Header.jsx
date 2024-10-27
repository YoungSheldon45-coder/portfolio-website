import React, {useState} from 'react'
import { Link as RouterLink } from 'react-router-dom' // Import React Router Link
import { Link as MuiLink } from '@mui/material' // Import MUI Link for styling
import logo from '../data/images/B-400.png'
import { navlink } from '../data/dummydata'
import { Menu } from '@mui/icons-material'


const Header = () => {
    const [responsive, setResponsive] = useState(false)

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    };
  return (
    <>
      <header>
        <div className="container flexsb">
        <MuiLink
                component={RouterLink} // Use React Router's Link for routing
                to="/"
                sx={{ textDecoration: 'none', }} // Add your custom styles here
                onClick={()=>scrollToTop()}
              >
          <div className="logo">
            {/* <img src={logo} alt="" className='logo' /> */}
            <h2>BONG<span>ANI</span></h2>
          </div>
          </MuiLink>
          <div className={responsive ? 'hideMenu' : 'nav'}>
            {navlink.map((links, i) => (
              <MuiLink
                component={RouterLink} // Use React Router's Link for routing
                to={links.url} 
                key={i}
                sx={{ textDecoration: 'none', color: 'white', padding: '0 10px' }} // Add your custom styles here
                data-aos="zoom-in-left"
                data-aos-easing="linear"
                onClick={()=>scrollToTop()}
              >
                {links.text}
              </MuiLink>
            ))}
          </div>
          <button className='toggle' onClick={()=> setResponsive(!responsive)}>
            <Menu className='icon'>

            </Menu>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
