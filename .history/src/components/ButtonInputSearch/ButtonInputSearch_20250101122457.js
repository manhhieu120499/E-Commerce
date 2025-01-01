import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({ size, placeholder, onChange, onClick, Icon }) {
  return (
    <WrapperButtonInputSearch>
      <Input size={size} placeholder={placeholder} />
      <Button size={size} icon={<Icon />}>
        Search
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
