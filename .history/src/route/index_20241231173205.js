import { Home, Product, Order } from "../pages";
import { DefaultLayout } from "../layouts";

const publicRoute = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
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
