import React from "react";
import { SliderComponent } from "../../components";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
export default function Home({ children }) {
  return (
    <div style={{ width: "100%" }}>
      <h1>Home Page</h1>
      <SliderComponent listItem={[pic1, pic2, pic3]} />
    </div>
  );
}
