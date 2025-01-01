import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./route";
function App() {
  let Layout = "";
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            {publicRoute.map((route) => {
              const Page = route.component;
              Layout = route.layout;
              return (
                <Layout>
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Page />}
                  />
                </Layout>
              );
            })}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
