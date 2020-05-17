import React, { Component } from "react";
import classes from "./Home.module.css";
import About from "../../components/LandingPage/AboutSession/About";
import Gallery from "../../components/LandingPage/Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeroImage from "../../components/LandingPage/HeroImage/HeroImage";
import Testimonials from "../../components/LandingPage/Testimonials/Testimonials";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <HeroImage />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
