import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./route";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoute.map((route) => {
            const Page = route.component;
            const Layout = route.layout;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
