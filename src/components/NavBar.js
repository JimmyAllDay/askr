import React from "react";

import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/users/loggedInSlice";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function NavBar(props) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <div>
      <Nav className="bg-light navBar" style={{ backgroundColor: "#E07A5f" }}>
        <Col className="d-flex justify-content-center">
          <h5>Would you Rather?</h5>
        </Col>
        <Col className="d-flex">
          {props.loggedIn && (
            <div className="w-100 d-flex justify-content-around">
              <Nav.Item className="my-auto">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="my-auto">
                <NavLink to="/add" activeClassName="active">
                  New Question
                </NavLink>
              </Nav.Item>
              <Nav.Item className="my-auto">
                <NavLink to="/leaderboard" activeClassName="active">
                  Leader Board
                </NavLink>
              </Nav.Item>
            </div>
          )}
        </Col>
        <Col className="d-flex">
          {props.loggedIn && (
            <div className="d-flex w-100 justify-content-end md-ms-5">
              <div className="d-flex">
                <div className="d-none d-lg-block my-auto">
                  {props.loggedIn && `Welcome, ${props.firstName}`}
                </div>
                <div className="avatar-image-container my-auto d-none d-md-block ms-3 me-5">
                  <img
                    className="nav-avatar"
                    src={props.loggedIn && props.avatar}
                    alt="avatar"
                  ></img>
                </div>
              </div>
              <Button className="mx-3 h-75 my-auto" onClick={() => logOut()}>
                Log Out
              </Button>
            </div>
          )}
        </Col>
      </Nav>
    </div>
  );
}

export default NavBar;
