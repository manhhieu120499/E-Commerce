import { Home, Product, Order, NotFound } from "../pages";
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
    path: "*",
    component: NotFound,
    layout: NormalLayout,
  },
];

const privateRoute = [];

export { publicRoute, privateRoute };
