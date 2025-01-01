import { Col, Row, Search } from "antd";
import { WrapperRow, WrapperSpan } from "./HeaderStyle";

export default function Header({ children }) {
  return (
    <div>
      <WrapperRow>
        <Col span={6}>
          <WrapperSpan>Sunny Shop</WrapperSpan>
        </Col>
        <Col span={12}>
          <Search
            placeholder="Enter your search term..."
            allowClear
            style={{
              width: 200,
            }}
          />
        </Col>
        <Col span={6}>col-8</Col>
      </WrapperRow>
    </div>
  );
}
