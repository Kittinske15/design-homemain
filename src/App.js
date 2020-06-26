import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent"

const navStyle = {
  padding: "15px 0px 10px 0px",
};

const fontStyle = {
  fontSize: "20px",
};

const imgStyle = {
  marginTop: "-18px",
  height: "50px",
  width: "180px",
  marginLeft: "20px",
  borderRadius: "10px",
};

const formStyle = {
  paddingRight: "10px",
};

const rowStyle = {
  justifyContent: 'space-between',
  backgroundColor: 'gray'
};

function App() {
  const logo = require("./images/pepsico (1).png");
  return (
    <NavbarComponent/>
  );
}

export default App;
