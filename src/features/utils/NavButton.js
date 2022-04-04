import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userLoggedOut } from "../users/loggedInSlice";

import { NavLink } from "react-router-dom";

import { Container, Navbar, Offcanvas, Nav, Button } from "react-bootstrap";

export default function NavButton(props) {
  const { loggedIn } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Container fluid className="p-0 d-flex">
      {loggedIn && (
        <>
          <Navbar.Toggle
            className="border-light ms-auto"
            aria-controls="offcanvasNavbar"
            onClick={() => handleShow()}
          />

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                style={{ fontFamily: "Righteous, cursive" }}
              >
                Askr
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex">
              <Nav className="align-items-center flex-grow-1">
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
                  <Button className="mx-auto mt-3" onClick={() => logOut()}>
                    Log Out
                  </Button>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </Container>
  );
}
