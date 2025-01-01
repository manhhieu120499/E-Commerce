import { Button, Col, Row } from "antd";
import { WrapperRow, WrapperSpan } from "./HeaderStyle";
import Search from "antd/es/transfer/search";
import { HomeOutlined } from "@ant-design/icons";

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
        <Col span={6}>
          <Button>
            <HomeOutlined />
            <span>Trang chủ</span>
          </Button>
        </Col>
      </WrapperRow>
    </div>
  );
}
