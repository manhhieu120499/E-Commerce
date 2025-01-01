import { Home, Product, Order } from "../pages";

const publicRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/order",
    component: Order,
  },
];

const privateRoute = [];

export { publicRoute, privateRoute };
