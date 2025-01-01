import InputSearch from "../InputSearch";
import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import { Button, Input } from "antd";
function ButtonInputSearch({
  size,
  placeholder,
  onChange,
  onClick,
  Icon,
  textButton,
  backgroundColorButton = "rgb(13,92,182)",
  backgroundColorInput = "#fff",
}) {
  return (
    <WrapperButtonInputSearch>
      <InputSearch
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        backgroundColorInput={backgroundColorInput}
      />
      <Button
        size={size}
        icon={<Icon />}
        style={{
          borderRadius: 0,
          backgroundColor: backgroundColorButton,
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
