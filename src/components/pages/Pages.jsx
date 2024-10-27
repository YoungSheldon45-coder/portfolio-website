import React from 'react'
import Home from '../home/Home';
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Header from '../common/Header';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Footer from '../common/Footer';

const Pages = () => {
  return (
    <>
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/Contact' component={Contact}/>
            </Switch>
            <Footer />
        </Router>
    </>
  )
}

export default Pages