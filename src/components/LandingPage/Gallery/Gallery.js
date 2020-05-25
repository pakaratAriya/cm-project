import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./Gallery.module.css";
import fonts from "../../../globalCss/Fonts.module.css";
import Button from "../../Button/Button";

const galleryList = [
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
];
const galleryLocations = [
  "Vancouver BC",
  "Burnaby BC",
  "Burnaby BC",
  "Vancouver BC",
  "Vancouver BC",
  "Vancouver BC",
];
const galleryPrice = [
  "$1,000,000.00",
  "$4,000,000.00",
  "$15,000,000.00",
  "$20,000,000.00",
  "$10,000,000.00",
  "$15,000,000.00",
];

const gallery = (props) => {
  return (
    <div className={classes.GalleryContainer}>
      <p className={[classes.Title, fonts.Title, fonts.Black].join(" ")}>
        FEATURED LISTINGS
      </p>

      <div className={classes.ListContainer}>
        {galleryList.map((g, index) => (
          <div
            key={index}
            className={[classes.ListItem, fonts.Subtitle, fonts.White].join(
              " "
            )}
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/images/IndexGalleryImages/${g}')`,
              backgroundSize: "cover",
            }}
          >
            <p className={classes.Location}>{galleryLocations[index]}</p>
            <p className={classes.Price}>{galleryPrice[index]}</p>
          </div>
        ))}
      </div>

      <div className={classes.GalleryButton}>
        <Button
          myClass={[
            "largeBtn",
            "goldBorder",
            "transparentBackground",
            "blackText",
          ]}
          click={() => {
            props.history.push({
              pathname: "/listing",
              search: "listing",
            });
          }}
        >
          VIEW MORE
        </Button>
      </div>
    </div>
  );
};

export default withRouter(gallery);
