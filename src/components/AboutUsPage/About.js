import React, { Component } from "react";
import classes from "./About.module.css";
import fonts from "../../globalCss/Fonts.module.css";
import Header from "../Header/Header";
import NavigationText from "../NavigationText/NavigationText";
import Team from "./Team/Team";
import Contact from "../../containers/Contact/Contact";
import Footer from "../Footer/Footer";

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
        <div className={classes.About} id="about">
          <div className={classes.AboutPhoto}></div>
          <div className={classes.AboutSession}>
            <p className={fonts.Title}>Andrea Castro</p>
            <p
              className={[
                classes.AboutMessage,
                fonts.Caption,
                fonts.Black,
              ].join(" ")}
            >
              In the local real estate market, Vancouver real estate agent
              Andrea Castro is renowned among colleagues and clients alike for
              her integrity, loyalty and professionalism. Andrea Castro is
              achieving extraordinary goals in record breaking time. Andrea is
              committed to her family and field an agent with skilled
              negotiating techniques she offers uncanny local exposure. As a
              Buyer’s and Seller’s agent at Homeland Realty, Andrea is committed
              to offering her clients the highest quality representation and
              professionalism along with superb customer service and
              individualized marketing strategies while understanding the needs
              of her clients. Andrea’s personable and professional character
              allows her to build and maintain solid relationships.
            </p>
            <p
              className={[
                classes.AboutMessage,
                fonts.Caption,
                fonts.Black,
              ].join(" ")}
            >
              Since becoming a Realtor in 2005 in Vancouver, Canada. Andrea has
              been involved in many transactions in the real estate business.
              Andrea prides herself on being a one-stop-shop for buyers and
              sellers, providing an experience to her clientele that is
              professional, personal always keeping her clients’ goals and
              expectations as priority, allowing her to build and maintain solid
              relationships that continue to be return clients.
            </p>
          </div>
        </div>
        <div className={fonts.Title}>CASTRO TEAM</div>
        <Team />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
