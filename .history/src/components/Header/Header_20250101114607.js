import { Button, Col, Row } from "antd";
import {
  ShoppingCartText,
  WrapperRow,
  WrapperShoppingCart,
  WrapperShoppingCartText,
  WrapperSpan,
} from "./HeaderStyle";
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
            padding: "0 15px",
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
            <WrapperShoppingCart>
              <ShoppingCartOutlined style={{ fontSize: 20 }} />
              <WrapperShoppingCartText>
                <ShoppingCartText />
              </WrapperShoppingCartText>
            </WrapperShoppingCart>
          </Button>
        </Col>
      </WrapperRow>
    </div>
  );
}
