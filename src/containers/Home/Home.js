import React, {Component} from 'react';
import classes from './Home.module.css';
import About from '../../components/AboutSession/About'
import Gallery from '../../components/Gallery/Gallery'
import HeroImage from '../../components/HeroImage/HeroImage'

class Home extends Component{ 
    render(){
        return (
            <div className={classes.Home}>
                <HeroImage/>
                <About/>
                <Gallery/>
            </div>
        )
    }
}

export default Home;