import { SearchOutlined } from "@ant-design/icons";
import {
  WrapperButtonInputSearch,
  ButtonTextSpan,
} from "./ButtonInputSearchStyle";
function ButtonInputSearch() {
  return (
    <WrapperButtonInputSearch>
      <SearchOutlined />
      <ButtonTextSpan>Search</ButtonTextSpan>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
