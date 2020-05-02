import React from "react";
import "./App.css";
import Home from "./pages/home.js";
import Header from "./components/Header";

function App() {
  return (
    <div className="blog">
      <Header> En alldeles unik blog</Header>
      <Home />
    </div>
  );
}

export default App;
