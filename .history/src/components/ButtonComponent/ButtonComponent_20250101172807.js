import React from "react";
import { Button } from "antd";
function ButtonComponent({
  size,
  styleButton,
  styleTextButton,
  onClick,
  textButton,
  Icon,
  ...rest
}) {
  return (
    <Button size={size} icon={<Icon />} onClick={onClick} style={styleButton}>
      <span style={textButton}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
