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
      {textButton}
    </Button>
  );
}

export default ButtonComponent;
