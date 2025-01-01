import React from "react";
import { WrapperTypeProduct } from "./TypeProductStyle";
function TypeProduct({ name, onClick }) {
  return (
    <WrapperTypeProduct>
      <span>{name}</span>
    </WrapperTypeProduct>
  );
}

export default TypeProduct;
