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

const logoStyle = {
  marginTop: "-18px",
  height: "50px",
  width: "180px",
  marginLeft: "20px",
  borderRadius: "10px",
};

const formStyle = {
  paddingRight: "10px",
};

const userStyle = {
  marginTop: "",
  height: "30px",
  width: "30px",
  marginRight: "10px",
  borderRadius: "10px",
}

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <>
        <Navbar style={navStyle} bg="light" variant="light">
          <Navbar.Brand href="#home">
            {" "}
            <img src={require("../images/pepsico (1).png")} style={logoStyle}></img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline style={formStyle}>
            
          <img src={require("../images/user.png")} style={userStyle}></img>
          alex@localhost
            <Button variant="outline-primary" style={{marginLeft: "20px"}}>Logout</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}

export default NavbarComponent;
