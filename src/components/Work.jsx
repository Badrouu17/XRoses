import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";

const Work = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="Work">
      <h2 className="work-title">- Our work -</h2>
      <Carousel responsive={responsive}>
        <Image
          className="work-slider-img"
          src={require("./../img/1.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/2.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/3.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/4.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/5.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/6.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/7.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/8.jpg")}
        ></Image>
        <Image
          className="work-slider-img"
          src={require("./../img/9.jpg")}
        ></Image>
      </Carousel>
    </div>
  );
};

export default Work;
