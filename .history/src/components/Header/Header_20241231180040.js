import { Col, Row } from "antd";

export default function Header({ children }) {
  return (
    <Row>
      <Col span={6}>col-8</Col>
      <Col span={12}>col-8</Col>
      <Col span={6}>col-8</Col>
    </Row>
  );
}
