import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/users/loggedInSlice";

import { NavLink } from "react-router-dom";

import { Container, Navbar, Offcanvas, Nav, Button } from "react-bootstrap";

export default function NavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  const {
    loggedIn,
    // firstName, avatar
  } = props;
  return (
    <Navbar bg="secondary" expand={false} className="">
      <Container fluid>
        <Navbar.Brand className="nav__logo text-light" href="/">
          Askr
        </Navbar.Brand>
        {loggedIn && (
          <>
            <Navbar.Toggle
              className="border-light"
              aria-controls="offcanvasNavbar"
              onClick={() => handleShow()}
            />

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Askr
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <Nav.Item className="">
                    <NavLink
                      to="/"
                      exact
                      activeClassName="active"
                      className="nav-link"
                      onClick={handleClose}
                    >
                      Home
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink
                      to="/add"
                      activeClassName="active"
                      className="nav-link"
                      onClick={handleClose}
                    >
                      New Question
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink
                      to="/leaderboard"
                      activeClassName="active"
                      className="nav-link"
                      onClick={handleClose}
                    >
                      Leader Board
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <Button className="mx-auto" onClick={() => logOut()}>
                      Log Out
                    </Button>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}
      </Container>
    </Navbar>
  );
}
