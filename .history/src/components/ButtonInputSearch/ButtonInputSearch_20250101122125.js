import { SearchOutlined } from "@ant-design/icons";
import {
  WrapperButtonInputSearch,
  ButtonTextSpan,
} from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch() {
  return (
    <WrapperButtonInputSearch>
      <Input placeholder="Enter your search term..." />
      <Button icon={<SearchOutlined />}>Search</Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
