import React from "react";

import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/users/loggedInSlice";

import { NavLink } from "react-router-dom";

import { Container, Nav, Button } from "react-bootstrap";

export default function NavBarCopy(props) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Container fluid className="p-0 border-bottom border-dark">
      <Nav className="nav-bar">
        <h5 className="my-auto nav-title title-brand">Askr</h5>
        {props.loggedIn && (
          <>
            <Nav.Item>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="nav-link"
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/add" activeClassName="active" className="nav-link">
                New Question
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/leaderboard"
                activeClassName="active"
                className="nav-link"
              >
                Leader Board
              </NavLink>
            </Nav.Item>

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
          </>
        )}
      </Nav>
    </Container>
  );
}
