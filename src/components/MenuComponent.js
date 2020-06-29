import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { Container, Row, Button } from "react-bootstrap";

const rowStyle = {
  padding: "10px",
  marginTop: "20px",
};

const colStyle = {
  borderRadius: "35px",
  fontWeight: 500,
  color: "black",
  backgroundColor: "#EAEAEA",
  flex: 1,
  padding: "10px",
  margin: "20px 70px 0px 70px",
  height: "160px",
};

const imgStyle = {
  height: "60px",
  marginTop: "20px",
  marginBottom: "20px",
};

function MenuComponent() {
  return (
    <div className="MenuComponent">
      <>
        <Container>
          <Row style={rowStyle}>
            <Button style={colStyle} variant="secondary">
              <img
                src={require("../images/seo-report.png")}
                style={imgStyle}
              ></img>
              <br />
              Report
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img
                src={require("../images/homepage.png")}
                style={imgStyle}
              ></img>
              <br />
              Home
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img src={require("../images/snacks.png")} style={imgStyle}></img>
              <br />
              PC
            </Button>{" "}
          </Row>

          <Row style={rowStyle}>
            <Button style={colStyle} variant="secondary">
              <img
                src={require("../images/human-resources.png")}
                style={imgStyle}
              ></img>
              <br />
              Manage Users
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img src={require("../images/adjust.png")} style={imgStyle}></img>
              <br />
              PC Parameter Setting
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img src={require("../images/multiple-users.png")} style={imgStyle}></img>
              <br />
              PC Parameter Setting Group
            </Button>{" "}
          </Row>

          <Row style={rowStyle}>
            <Button style={colStyle} variant="secondary">
              <img
                src={require("../images/snack.png")}
                style={imgStyle}
              ></img>
              <br />
              Non-PC
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img src={require("../images/recipe.png")} style={imgStyle}></img>
              <br />
              OMS
            </Button>{" "}
            <Button style={colStyle} variant="secondary">
              <img src={require("../images/package.png")} style={imgStyle}></img>
              <br />
              Packing
            </Button>{" "}
          </Row>
        </Container>
      </>
    </div>
  );
}

export default MenuComponent;
