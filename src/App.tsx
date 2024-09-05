import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import "@/App.css";
function App() {
  return (
    <div className="App">
      <div>{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
