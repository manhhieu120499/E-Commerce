import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./route";
import { Header } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {publicRoute.map((route) => {
            const Page = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
