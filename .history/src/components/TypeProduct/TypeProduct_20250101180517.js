import React from "react";
import { WrapperTypeProduct } from "./TypeProductStyle";
function TypeProduct({ name, onClick }) {
  return (
    <WrapperTypeProduct onClick={onClick}>
      <span style={{ fontSize: 16 }}>{name}</span>
    </WrapperTypeProduct>
  );
}

export default TypeProduct;
