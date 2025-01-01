import { Header, TypeProduct } from "../../components";

export default function DefaultLayout({ children }) {
  const arr = ["TV", "Tủ Lạnh", "Máy giặc"];
  return (
    <div className="wrapper">
      <Header />
      <div
        style={{
          padding: "0 120px",
          borderBottom: "1px solid #ccc",
          height: 44,
          display: "flex",
          alignItems: "center",
        }}
      >
        {arr.map((typeProduct) => (
          <TypeProduct name={typeProduct} key={typeProduct} />
        ))}
      </div>
      <div style={{ backgroundColor: "#efefef", padding: "0 120px" }}>
        {children}
      </div>
    </div>
  );
}
