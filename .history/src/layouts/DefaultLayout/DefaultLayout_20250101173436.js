import { Header } from "../../components";
import TypeProduct from "../../components/TypeProduct";

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <TypeProduct />
      {children}
    </div>
  );
}
