import { SearchOutlined } from "@ant-design/icons";
import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({ size, placeholder, onChange, onClick }) {
  return (
    <WrapperButtonInputSearch>
      <Input size="large" placeholder="Enter your search term..." />
      <Button size="large" icon={<SearchOutlined />}>
        Search
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
