import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./route";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map(route => (<Route path={route.path} element={<route.component/>}/>))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
