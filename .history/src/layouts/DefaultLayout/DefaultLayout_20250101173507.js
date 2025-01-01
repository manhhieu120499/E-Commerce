import { Header, TypeProduct } from "../../components";

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <TypeProduct />
      {children}
    </div>
  );
}
