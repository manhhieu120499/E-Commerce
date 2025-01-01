import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/slices/productSlice";
function App() {
  const value = useSelector((state) => state.product.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{value}</h1>
      <Button type="primary" onClick={() => dispatch(increase())}>Increase</Button>
      <Button type="primary" onClick={() => dispatch(decrease())}>Decrease</Button>
    </div>
  );
}

export default App;
