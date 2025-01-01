import { Row } from "antd";
import styled from "styled-components";

export const WrapperRow = styled(Row)`
  padding: 15px 120px;
  background-color: rgb(26, 148, 255);
`;

export const WrapperSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const WrapperShoppingCart = styled.div`
  position: relative;
  width: 100%;
`;

export const WrapperShoppingCartText = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: yellow;
`;

export const ShoppingCartText = styled.span`
  font-size: 12px;
  color: black;
`;
