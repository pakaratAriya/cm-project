import React, { Component } from "react";
import classes from "./About.module.css";
import fonts from "../../globalCss/Fonts.module.css";
import Header from "../Header/Header";
import NavigationText from "../NavigationText/NavigationText";
import Team from "./Team/Team";
import Contact from "../../containers/Contact/Contact";
import Footer from "../Footer/Footer";
import AboutAndrea from "./AboutAndrea/AboutAndrea";

class About extends Component {
  // componentDidMount() {
  //   let findingTag = this.props.location.search.slice(1);
  //   document.getElementById(findingTag).scrollIntoView();
  // }

  render() {
    return (
      <React.Fragment>
        <Header />
        <NavigationText />
        <div className={fonts.Title}>ABOUT</div>
        <AboutAndrea display="none" />
        <div className={fonts.Title}>CASTRO TEAM</div>
        <Team />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
