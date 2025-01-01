import { InputComponent as InputSearch } from "../InputComponent";
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
      <InputSearch
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        backgroundColorInput={backgroundColorInput}
      />
      <ButtonComponent
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
      </ButtonComponent>
    </WrapperButtonInputSearch>
  );
}

export default ButtonInputSearch;
