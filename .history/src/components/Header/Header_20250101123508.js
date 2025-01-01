import { Button, Col, Input, Row } from "antd";
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
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch";

export default function Header({ children }) {
  return (
    <div>
      <WrapperRow>
        <Col span={5}>
          <WrapperSpan>Sunny Shop</WrapperSpan>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size={"medium"}
            placeholder={"Enter your search term..."}
            Icon={SearchOutlined}
            textButton={"Search"}
            onClick={() => alert("Search me")}
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
                <ShoppingCartText>0</ShoppingCartText>
              </WrapperShoppingCartText>
            </WrapperShoppingCart>
          </Button>
        </Col>
      </WrapperRow>
    </div>
  );
}
