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
        style={{ borderRadius: 0, border: "none", backgroundColor: "#fff" }}
        onChange={onChange}
        variant="outlined"
      />
      <Button
        size={size}
        icon={<Icon />}
        style={{
          borderRadius: 0,
          backgroundColor: backgroundColor,
          border: "none",
          color: "white",
        }}
        onClick={onClick}
      >
        {textButton}
      </Button>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
