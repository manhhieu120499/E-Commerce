import { SearchOutlined } from "@ant-design/icons";
import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
function ButtonInputSearch() {
  return (
    <WrapperButtonInputSearch>
      <SearchOutlined />
      <ButtonInputSearch>Search</ButtonInputSearch>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
