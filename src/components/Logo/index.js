import React from "react";
import LogoPic from "../../Images/bluelogo.png";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function LogoLine() {
  return (
    <div>
      <Container>
        <Row className="header">
          <Col size="md-5" className="header-line">
            <hr className="logo-line" />
          </Col>
          <Col size="md-2">
          <img className="logo-center" src={LogoPic} alt="Logo" />
          </Col>
          <Col size="md-5" className="header-line">
          <hr className="logo-line" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LogoLine;
