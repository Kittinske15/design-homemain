import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent"
import MenuComponent from "./components/MenuComponent"
import FooterComponent from "./components/FooterComponent"

function App() {
  return (
    <div>
      <NavbarComponent/>
      <MenuComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
