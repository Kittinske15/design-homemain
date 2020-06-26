import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";

const rowStyle = {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
  };
  
  const colStyle = {
    backgroundColor: "gray",
    flex: 1,
    padding: "10px",
    marginRight: "5px"
  };

  function MenuComponent() {
    return (
      <div className="MenuComponent">
        <>  
          <Container>
            <Row xs="1" sm="2" md="4" style={rowStyle}>
              <Col style={colStyle}>Column</Col>
              <Col style={colStyle}>Column</Col>
              <Col style={colStyle}>Column</Col>
              <Col style={colStyle}>Column</Col>
            </Row>
          </Container>
        </>
      </div>
    );
  }
  
  export default MenuComponent;
  