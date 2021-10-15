import React from "react";
import SelectUser from "./SelectUser";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import logo from "../../assets/images/logo.svg";
import "../../app/styles/login-styles.css";

export function LoginModal(props) {
  // TODO: Add functionality for creating new users

  return (
    <div className="mt-2 w-50 justify-content-center login-modal">
      <Col className="w-75 LoginModal login-background">
        <Row className="login-background">
          <h1 className="login-background">Would You Rather?</h1>
        </Row>
        <Row className="login-background">
          <div className="mt-4 login-background">
            <img
              style={{ borderRadius: "50px" }}
              src={logo}
              className="App-logo login-background"
              alt="logo"
            />
          </div>
        </Row>
        <Row className="mt-4 login-background">
          <h3 className="login-background">Select a user to log in</h3>
        </Row>
        <Row className="login-background">
          <Col className="d-flex justify-content-center login-background"></Col>
          <Col className="login-background"></Col>
        </Row>
        <Row className="add-select-user mt-2 login-background">
          <SelectUser className="login-background" users={props.props} />
        </Row>
      </Col>
    </div>
  );
}

export default LoginModal;
