import Home from "../pages/home";
import Product from "../pages/product";

const publicRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
];

const privateRoute = []

export { publicRoute, privateRoute}
