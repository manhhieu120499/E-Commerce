import React from "react";
import Slider from "react-slick";
function SliderComponent({ listItem }) {
  return (
    <Slider>
      {listItem.map((item) => (
        <div>
          <img src={item} alt="slider" />
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
