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
        <div
          key={item}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={item} alt="slider" />
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;