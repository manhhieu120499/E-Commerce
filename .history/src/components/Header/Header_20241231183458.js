import { Button, Col, Row } from "antd";
import { WrapperRow, WrapperSpan } from "./HeaderStyle";
import Search from "antd/es/transfer/search";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Header({ children }) {
  return (
    <div>
      <WrapperRow>
        <Col span={5}>
          <WrapperSpan>Sunny Shop</WrapperSpan>
        </Col>
        <Col span={12}>
          <Search
            placeholder="Enter your search term..."
            allowClear
            style={{
              width: 200,
              height: 60,
            }}
          />
        </Col>
        <Col
          span={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button>
            <HomeOutlined />
            <span>Trang chủ</span>
          </Button>
          <Button>
            <UserOutlined />
            <span>Tài khoản</span>
          </Button>
          <Button>
            <ShoppingCartOutlined style={{ fontSize: 20 }} />
          </Button>
        </Col>
      </WrapperRow>
    </div>
  );
}
