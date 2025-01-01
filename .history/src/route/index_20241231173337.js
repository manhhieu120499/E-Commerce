import { Home, Product, Order } from "../pages";
import { DefaultLayout, NormalLayout } from "../layouts";

const publicRoute = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/product",
    component: Product,
    layout: DefaultLayout,
  },
  {
    path: "/order",
    component: Order,
    layout: DefaultLayout,
  },
  {
    path: "/about",
    component: Order,
    layout: NormalLayout,
  },
  {
    path: "*",
    component: Home,
    layout: null,
  },
];

const privateRoute = [];

export { publicRoute, privateRoute };
