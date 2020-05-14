import React, { useState } from "react";
import classes from "./Testimonials.module.css";
import fonts from "../../../globalCss/Fonts.module.css";

const quotes = [
  {
    image: "client1.jpg",
    client: "Anne Westminster",
    quote:
      "Andrea Castro was an absolute pleasure to work with. She has a great sense of humour, a professional approach and is an excellent communicator. I especially like working with realtors who know their priorities and can keep focus on proactive measures to bring a deal together; Andrea delivered just that. I would be delighted to work with her again.",
  },
  {
    image: "client2.jpg",
    client: "Michael Graham",
    quote:
      "Working with Andrea was a great experience. She is a professional, fascinating and hard working Lady. I look forward to more future dealings in Langley area.",
  },
  {
    image: "client3.jpg",
    client: "Jessica Roberts",
    quote:
      "Just  a note  to express my appreciation of the professional manner you handled the sale of my townhouse. I felt enforced by the quick sale close to asking price. Thank you for your hard work dedication, guidance and most of all for being a good friend.",
  },
];

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = quotes.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index,
    });
  }

  nextSlide() {
    const lastIndex = quotes.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index,
    });
  }

  render() {
    return (
      <div className={classes.Testimonials}>
        <p className={[classes.Title, fonts.H2, fonts.Black].join(" ")}>
          TESTIMONIALS
        </p>

        <div
          className={classes.ArrowLeft}
          onClick={() => this.previousSlide()}
        ></div>

        <div className={classes.Info}>
          <div
            className={classes.Image}
            style={{
              backgroundImage:
                "url('/images/" + quotes[this.state.currentIndex].image + "')",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={classes.ClientsInfo}>
            <p
              className={[classes.Name, fonts.Subtitle, fonts.Black].join(" ")}
            >
              {quotes[this.state.currentIndex].client}
            </p>
            <p className={[classes.Quote, fonts.Body, fonts.Black].join(" ")}>
              {quotes[this.state.currentIndex].quote}
            </p>
          </div>
        </div>

        <div
          className={classes.ArrowRight}
          onClick={() => this.nextSlide()}
        ></div>
      </div>
    );
  }
}

export default Testimonials;
