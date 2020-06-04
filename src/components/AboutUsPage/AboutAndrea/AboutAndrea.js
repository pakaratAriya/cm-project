import React from "react";
import classes from "./AboutAndrea.module.css";
import fonts from "../../../globalCss/Fonts.module.css";
import Button from "../../Button/Button";
import { withRouter } from "react-router-dom";

const About = (props) => (
  <div className={classes.About} id="about">
    <div
      className={classes.AboutPhoto}
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/aboutPhoto.png')`,
      }}
    ></div>
    <div className={classes.AboutSession}>
      <p className={[classes.AboutTitle, fonts.Title, fonts.Black].join(" ")}>
        Andrea Castro
      </p>
      <p
        className={[classes.AboutMessage, fonts.Caption, fonts.Black].join(" ")}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices mattis
        enim semper platea libero. Viverra bibendum tellus habitant consectetur.
        Pellentesque vestibulum est ullamcorper ultricies nec sit ut. Hendrerit
        quam eu lacus, risus tristique senectus <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices mattis
        enim semper platea libero. Viverra bibendum tellus habitant consectetur.
        Pellentesque vestibulum est ullamcorper ultricies nec sit ut. Hendrerit
        quam eu lacus, risus tristique senectus tristique varius. Et non
        faucibus id proin phasellus ipsum duis accumsan vulputate. Sed ultrices
        morbi viverra nunc urna fermentum mattis. Lectus vulputate lacus dolor
        integer proin suspendisse purus. Cras cras enim augue parturient
        venenatis. Posuere egestas viverra et pretium adipiscing ut quis
        adipiscing magnis.
      </p>
      <div
        className={classes.AboutButton}
        style={{
          display: props.display,
        }}
      >
        <Button
          myClass={[
            "largeBtn",
            "goldBorder",
            "transparentBackground",
            "blackText",
          ]}
          click={() => {
            props.history.push({
              pathname: "/about",
              search: "about",
            });
          }}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  </div>
);

export default withRouter(About);
