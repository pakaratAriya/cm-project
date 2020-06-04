import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./Gallery.module.css";
import fonts from "../../../globalCss/Fonts.module.css";
import Button from "../../Button/Button";
import imagePlaceholder from "../../../DataPlaceholder/imagePlaceholder";
import Image from "../../Image/Image";

const gallery = (props) => {
  return (
    <div className={classes.GalleryContainer}>
      <p className={[classes.Title, fonts.Title, fonts.Black].join(" ")}>
        FEATURED LISTINGS
      </p>

      <div className={classes.ListingGallery}>
        {imagePlaceholder.slice(0, 6).map((image) => {
          return (
            <Image src={image.url} place={image.place} price={image.price} />
          );
        })}
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
