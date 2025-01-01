import InputComponent from "../InputComponent";
import { WrapperButtonInputSearch } from "./ButtonInputSearchStyle";
import ButtonComponent from "../ButtonComponent";
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
      <InputComponent
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        backgroundColorInput={backgroundColorInput}
      />
      <ButtonComponent
        size={size}
        Icon={Icon}
        styleButton={{
          borderRadius: 0,
          backgroundColor: backgroundColorButton,
          border: "none",
          color: "white",
        }}
        onClick={onClick}
        textButton={textButton}
        styleTextButton={{ color: "white", fontSize: 16 }}
      />
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
