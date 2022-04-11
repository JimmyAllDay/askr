import React from "react";

import Avatar from "./Avatar";

import { Container, Row, Col } from "react-bootstrap";

export default function CardHeader({ avatar, name, text, subComp }) {
  return (
    <Container fluid className="p-0">
      <Row className="d-flex mx-auto w-100">
        <Col xs={2} className="p-0 pt-2 me-auto pe-3">
          {avatar && <Avatar avatar={avatar} />}
        </Col>
        <Col xs={8} className="d-flex flex-column align-items-center pt-2">
          <h3 className="align-self-center m-auto">{name}</h3>
          {text}
        </Col>
        <Col xs={2} className="d-flex flex-column m-0 pt-1 pe-1">
          {subComp}
        </Col>
      </Row>
    </Container>
  );
}
