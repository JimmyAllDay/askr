import React from "react";

import { Container } from "react-bootstrap";

export default function Avatar({ avatar }) {
  return (
    <Container
      fluid
      className="p-0 d-flex"
      style={{ height: "50px", width: "50px" }}
    >
      <img
        src={avatar}
        alt="avatar"
        className="avatar__image mx-auto"
        style={{ height: "100%", width: "auto" }}
      ></img>
    </Container>
  );
}
