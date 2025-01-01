import { SearchOutlined } from "@ant-design/icons";
import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({ size, placeholder, onChange, onClick }) {
  return (
    <WrapperButtonInputSearch>
      <Input size={size} placeholder={placeholder} />
      <Button size={size} icon={<SearchOutlined />}>
        Search
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
