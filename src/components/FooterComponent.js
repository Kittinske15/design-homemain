import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const navStyle = {
    backgroundColor: "#DADADA",
    position: "absolute",
    bottom: 0,
    width: "100%",
  };

function FooterComponent() {
  return (
    <div className="FooterComponent">
      <>
        <Navbar color="dark" style={navStyle}>
          <Container>
            <NavbarBrand style={{ fontSize: "small" }}>
              © 2019 - PepsiCo - <a href="">Privacy</a>
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default FooterComponent;
