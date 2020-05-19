import React from "react";
import classes from "./SearchHome.module.css";
import fonts from "../../../../globalCss/Fonts.module.css";
import Button from "../../../Button/Button";

const searchHome = (props) => (
  <div className={classes.SearchWrapper}>
    <p className={[classes.SearchText, fonts.H1, fonts.White].join(" ")}>
      LET US FIND YOUR <br /> NEXT HOME
    </p>
    <input
      type="text"
      className={[classes.SearchInput, fonts.Caption, fonts.Gold].join(" ")}
      placeholder="Price, Neighborhood, City, Country"
    />
    <Button
      myClass={["smallBtn", "goldBorder", "goldBackground", "whiteText"]}
      style={{
        gridColumn: "20/24",
        display: "inline-block",
        marginLeft: "20px",
      }}
    >
      SEARCH
    </Button>
  </div>
);

export default searchHome;
