import React from "react";

import { Container } from "react-bootstrap";

export default function Name({ name }) {
  return (
    <Container fluid className="p-0 d-flex">
      <h5 className="align-self-center m-auto">{name}</h5>
    </Container>
  );
}
