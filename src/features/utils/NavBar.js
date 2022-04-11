import React from "react";

import NavButton from "./NavButton";

import { useSelector, useDispatch } from "react-redux";
import { userLoggedOut, selectLoggedInUser } from "../users/loggedInSlice";

import { NavLink } from "react-router-dom";

import { Container, Navbar, Nav, Button, Col } from "react-bootstrap";

export default function NavBar() {
  const user = useSelector(selectLoggedInUser);
  const { loggedIn, firstName, avatar } = user;

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Navbar bg="secondary" expand={false}>
      <Container fluid className="d-flex">
        <Col xs={2} md={3} className="d-flex">
          <Navbar.Brand
            className="text-light ms-2 me-auto"
            href="/"
            style={{ fontFamily: "Righteous, cursive" }}
          >
            Askr
          </Navbar.Brand>
        </Col>
        {loggedIn && (
          <>
            <Col
              md={6}
              xl={5}
              className="d-none d-md-flex justify-content-between px-2 mx-auto"
            >
              <Nav.Item>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link text-light"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/add"
                  activeClassName="active"
                  className="nav-link text-light"
                >
                  New Question
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/leaderboard"
                  activeClassName="active"
                  className="nav-link text-light"
                >
                  Leaderboard
                </NavLink>
              </Nav.Item>
            </Col>

            <Col xs={8} md={2} className="p-0 d-flex">
              <div className="mx-auto d-flex">
                <p className="my-auto ms-auto text-primary d-none d-md-flex d-xl-none">
                  {`${firstName}`}
                </p>
                <p className="my-auto ms-auto text-light d-md-none d-xl-flex">{`Welcome, ${firstName}`}</p>
                <img
                  src={avatar}
                  alt="avatar icon"
                  style={{ height: "35px", width: "35px" }}
                  className="ms-2"
                />
              </div>
            </Col>

            <Col xs={2} className="d-flex d-md-none">
              <NavButton className="d-md-none ms-auto" loggedIn={loggedIn} />
            </Col>
            <Col md={1} className="d-flex d-none d-md-flex">
              <Button
                variant="outline-info"
                className="ms-auto px-1 my-auto d-flex"
                size="sm"
                onClick={() => logOut()}
              >
                <p
                  className="m-0 my-auto text-info nav-button-text"
                  style={{ fontSize: "0.9em" }}
                >
                  Log Out
                </p>
              </Button>
            </Col>
          </>
        )}
      </Container>
    </Navbar>
  );
}
