import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import "../App.css";

const navStyle = {
  padding: "15px 0px 10px 0px",
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

function NavbarComponent() {
  const logo = require("../images/pepsico (1).png");
  return (
    <div className="NavbarComponent">
      <>
        <Navbar style={navStyle} bg="light" variant="light">
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} style={imgStyle}></img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline style={formStyle}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}

export default NavbarComponent;
