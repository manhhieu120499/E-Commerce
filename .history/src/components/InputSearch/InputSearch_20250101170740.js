import { Input } from "antd";
function InputSearch({ size, placeholder, backgroundColorInput, onChange }) {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={{
        borderRadius: 0,
        border: "none",
        backgroundColor: backgroundColorInput,
      }}
      onChange={onChange}
      variant="outlined"
    />
  );
}

export default InputSearch;