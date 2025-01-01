import { Header } from "../../components";

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
}
