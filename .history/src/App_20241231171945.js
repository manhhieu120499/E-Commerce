import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./route";
import { Header } from "./components";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {publicRoute.map((route) => {
            const Page = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
