import React from "react";
// import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/slices/productSlice";
import styled from 'styled-components'
function App() {
  const value = useSelector((state) => state.product.value)
  const dispatch = useDispatch();

  const Button = styled.button({
    color: 'red',
    margin: "0 8px",
  })

  return (
    <div className="App">
      <h1>{value}</h1>
      <Button onClick={() => dispatch(increase())}>Increase</Button>
      <Button onClick={() => dispatch(decrease())}>Decrease</Button>
    </div>
  );
}

export default App;
