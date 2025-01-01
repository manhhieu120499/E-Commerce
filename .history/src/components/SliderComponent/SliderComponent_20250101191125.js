import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
function SliderComponent({ listItem }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {listItem.map((item) => (
        <Image
          src={item}
          alt="slide"
          preview={false}
          width={"100%"}
          height={300}
        />
      ))}
    </Slider>
  );
}

export default SliderComponent;
