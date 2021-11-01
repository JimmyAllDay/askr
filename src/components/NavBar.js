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
      <Nav className="nav-bar">
        <Col className="d-flex justify-content-center nav-col">
          <h5 className="my-auto nav-title title-brand">Askr</h5>
        </Col>
        <Col className="d-flex nav-col">
          {props.loggedIn && (
            <div className="w-100 d-flex justify-content-around h-75 my-auto">
              <Nav.Item className="">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="">
                <NavLink
                  to="/add"
                  activeClassName="active"
                  className="nav-link"
                >
                  New Question
                </NavLink>
              </Nav.Item>
              <Nav.Item className="">
                <NavLink
                  to="/leaderboard"
                  activeClassName="active"
                  className="nav-link"
                >
                  Leader Board
                </NavLink>
              </Nav.Item>
            </div>
          )}
        </Col>
        <Col className="d-flex nav-col justify-content-end">
          {props.loggedIn && (
            <div className="d-flex justify-content-end">
              <div className="d-flex ms-5">
                <div className="d-none d-lg-block my-auto ms-5 welcome-container h-50">
                  {props.loggedIn && `Welcome, ${props.firstName}`}
                </div>
                <div className="avatar-image-container my-auto d-none d-md-block ms-2 me-1 p-1">
                  <img
                    className="nav-avatar"
                    src={props.loggedIn && props.avatar}
                    alt="avatar"
                  ></img>
                </div>
              </div>
              <Button
                className="ms-4 my-auto global-button me-2"
                onClick={() => logOut()}
              >
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
