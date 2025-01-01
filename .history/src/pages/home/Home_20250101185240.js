import React from "react";
import { SliderComponent } from "../../components";
export default function Home({ children }) {
  return (
    <div style={{ width: "100%" }}>
      <h1>Home Page</h1>
      <SliderComponent />
    </div>
  );
}
