import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent"
import MenuComponent from "./components/MenuComponent"

function App() {
  return (
    <div>
      <NavbarComponent/>
      <MenuComponent />
    </div>
  );
}

export default App;
