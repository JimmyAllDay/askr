import React from "react";

import { Container, Col, Row } from "react-bootstrap";

export default function Wrapper({ name, component }) {
  return (
    <Container fluid className="px-2">
      <Col xs={12} sm={9} md={7} lg={6} xl={5} className=" mx-auto">
        <Row className="p-0 m-auto">
          <h4 className="my-1 p-0 ps-1 text-light">{name}</h4>
        </Row>
        <Row className="m-auto bg-none">{component}</Row>
      </Col>
    </Container>
  );
}
