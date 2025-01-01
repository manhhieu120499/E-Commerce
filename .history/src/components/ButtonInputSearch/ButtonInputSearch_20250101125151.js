import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({
  size,
  placeholder,
  onChange,
  onClick,
  Icon,
  textButton,
  backgroundColor = "rgb(13,92,182)",
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
        styles={{ border: "none", backgroundColor: backgroundColor }}
      >
        {textButton}
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
