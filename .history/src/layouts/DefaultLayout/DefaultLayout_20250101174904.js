import { Header, TypeProduct } from "../../components";

export default function DefaultLayout({ children }) {
  const arr = ["TV", "Tủ Lạnh", "Máy giặc"];
  return (
    <div className="wrapper">
      <Header />
      {arr.map((typeProduct) => (
        <TypeProduct name={typeProduct} />
      ))}
      {children}
    </div>
  );
}
