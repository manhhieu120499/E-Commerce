import React from "react";
import { SliderComponent } from "../../components";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
export default function Home({ children }) {
  return (
    <div style={{ width: "100%" }}>
      <SliderComponent listItem={[pic1, pic2, pic3]} />
    </div>
  );
}
