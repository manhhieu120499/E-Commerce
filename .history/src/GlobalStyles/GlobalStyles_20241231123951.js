import "./css/GlobalStyles.css";
import "antd/dist/antd.css";
export default function GlobalStyle({ children }) {
    return (
        <div className="wrapper">
            { children }
        </div>
    )
}