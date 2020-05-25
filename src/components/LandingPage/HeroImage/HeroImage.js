import React from "react";
import classes from "./HeroImage.module.css";
import fonts from "../../../globalCss/Fonts.module.css";
import Button from "../../Button/Button";
import SearchHome from "./SearchHome/SearchHome";
import Header from "../../Header/Header";

const heroImage = (props) => (
  <div className={classes.HeroImage}
  style={{
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/heroImage.jpg")`,
  }}>
    <Header none="none" />
    <SearchHome />
  </div>
);

export default heroImage;
