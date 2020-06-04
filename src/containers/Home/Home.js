import React, { Component } from "react";
import classes from "./Home.module.css";
import AboutAndrea from "../../components/AboutUsPage/AboutAndrea/AboutAndrea";
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
        <AboutAndrea />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
