import React from "react";

import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container fluid className="p-1 d-flex flex-column">
      <h6 className="text-light">
        <br />
        There is no page at that location. <br />
        <br />
        Click the button to go home.
      </h6>

      <br />

      <Link to="/">
        <Button size="large" variant="primary" className="mx-auto">
          Home
        </Button>
      </Link>
    </Container>
  );
}

export default NotFound;
