import { Header, TypeProduct } from "../../components";

export default function DefaultLayout({ children }) {
  const arr = ["TV", "Tủ Lạnh", "Máy giặc"];
  return (
    <div className="wrapper">
      <Header />
      <div style={{ padding: "0 120px" }}>
        {arr.map((typeProduct) => (
          <TypeProduct name={typeProduct} />
        ))}
      </div>
      <div style={{ padding: "0 120px" }}>{children}</div>
    </div>
  );
}
