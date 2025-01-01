import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({
  size,
  placeholder,
  onChange,
  onClick,
  Icon,
  textButton,
}) {
  return (
    <WrapperButtonInputSearch>
      <Input size={size} placeholder={placeholder} />
      <Button
        size={size}
        icon={<Icon />}
        type="primary"
        style={{ borderRadius: 0 }}
      >
        {textButton}
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
