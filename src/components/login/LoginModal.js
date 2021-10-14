import React, { useState } from "react";
import AddNewUser from "./AddNewUser";
import SelectUser from "./SelectUser";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import logo from "../../assets/images/logo.svg";
import "../../app/styles/login-styles.css";

export function LoginModal(props) {
  const [show, toggleShow] = useState(true);

  const addNew = () => toggleShow(!show);

  return (
    <div className="mt-2 w-50 justify-content-center">
      <Col className="w-75 LoginModal">
        <Row>
          <h1>Would You Rather?</h1>
        </Row>
        <Row>
          <div className="mt-4">
            <img
              style={{ borderRadius: "50px" }}
              src={logo}
              className="App-logo"
              alt="logo"
            />
          </div>
        </Row>
        <Row className="mt-4">
          <h3>Select or add a user to log in</h3>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <button className="login-select-btn" onClick={() => addNew()}>
              {!show ? "Select User" : "Add User"}
            </button>
          </Col>
          <Col></Col>
        </Row>
        <Row className="add-select-user mt-2">
          {!show ? (
            <AddNewUser users={props.props} />
          ) : (
            <SelectUser users={props.props} />
          )}
        </Row>
      </Col>
    </div>
  );
}

export default LoginModal;
