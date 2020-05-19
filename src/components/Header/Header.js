import React from "react";
import classes from "./Header.module.css";
import fonts from "../../globalCss/Fonts.module.css";
import Navigation from "./Navigation/Navigation";
import { withRouter } from "react-router-dom";

const header = (props) => {
  const onClickLogoHandler = () => {
    props.history.push("/");
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className={classes.Header}
      style={{
        backgroundImage: props.none,
      }}
    >
      <div
        className={[classes.Title, fonts.Logo].join(" ")}
        onClick={onClickLogoHandler}
      >
        CM
      </div>
      <Navigation />
    </div>
  );
};

export default withRouter(header);
