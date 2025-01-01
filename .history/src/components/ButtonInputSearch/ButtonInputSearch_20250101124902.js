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
      <Input
        size={size}
        placeholder={placeholder}
        style={{ borderRadius: 0 }}
        onChange={onChange}
        variant="outlined"
        styles={{ backgroundColor: "#fff" }}
      />
      <Button
        size={size}
        icon={<Icon />}
        style={{ borderRadius: 0 }}
        onClick={onClick}
        styles={{ border: "none" }}
      >
        {textButton}
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
