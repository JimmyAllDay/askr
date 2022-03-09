import React from "react";

import { Container, Col, Row } from "react-bootstrap";

export default function Wrapper({ Name, Component }) {
  return (
    <Container fluid className="px-2">
      <Col xs={12} sm={9} md={7} lg={6} xl={5} className=" mx-auto">
        <Row className="p-0 m-auto">
          <h4 className="mb-1 p-0 ps-1 text-primary">{Name}</h4>
        </Row>
        <Row className="m-auto p-1 border border-dark bg-light">
          {Component}
        </Row>
      </Col>
    </Container>
  );
}
