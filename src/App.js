import Aos from 'aos';
import './App.css';
import Pages from './components/pages/Pages';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';

function App() {
  const [scrollingDown, setScrollingDown] = useState(true)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    useEffect(() => {
        Aos.init({ once: true }) // Initialize AOS with animations running once per scroll down

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            // Check if scrolling down
            if (scrollTop > lastScrollTop) {
                setScrollingDown(true)
            } else {
                setScrollingDown(false)
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop) // Reset at the top of the page
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollTop])

    useEffect(() => {
        if (scrollingDown) {
            Aos.refresh()
        }
    }, [scrollingDown])
  
  return (
    <Pages/>
  );
}

export default App;
