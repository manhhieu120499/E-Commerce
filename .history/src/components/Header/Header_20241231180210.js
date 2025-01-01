import { Col, Row } from "antd";
import { HeaderStyle } from "./HeaderStyle";

export default function Header({ children }) {
  return (
    <div>
      <HeaderStyle>
        <Col span={6}>col-8</Col>
        <Col span={12}>col-8</Col>
        <Col span={6}>col-8</Col>
      </HeaderStyle>
    </div>
  );
}
