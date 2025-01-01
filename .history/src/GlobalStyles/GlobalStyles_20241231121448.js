import "GlobalStyle.css";
export default function GlobalStyle({ children }) {
    return (
        <div className="wrapper">
            { children }
        </div>
    )
}