import { Col, Row } from "antd";
import { WrapperRow, WrapperSpan } from "./HeaderStyle";

export default function Header({ children }) {
  return (
    <div>
      <WrapperRow>
        <Col span={6}>
          <WrapperSpan>Sunny Shop</WrapperSpan>
        </Col>
        <Col span={12}>col-8</Col>
        <Col span={6}>col-8</Col>
      </WrapperRow>
    </div>
  );
}
