import React from "react";

import { Container, Col, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";

export default function Wrapper({ component }) {
  const location = useLocation();
  const pathName = location.pathname;

  const stripPath = (path) => path.split("/")[1];

  let pageName = "";

  switch (stripPath(pathName)) {
    case "login":
      pageName = "Log In";
      break;
    case "":
      pageName = "Questions";
      break;
    case "questions":
      pageName = "Poll";
      break;
    case "leaderboard":
      pageName = "Leaderboard";
      break;
    case "add":
      pageName = "New Question";
      break;
    case "answer":
      pageName = "Answer";
      break;
    default:
      pageName = "Not found";
  }

  return (
    <Container fluid className="px-2">
      <Col xs={12} sm={9} md={7} lg={6} xl={5} className=" mx-auto">
        <Row className="p-0 m-auto">
          <h4 className="my-1 p-0 ps-1 text-light">{pageName}</h4>
        </Row>
        <Row className="m-auto bg-none">{component}</Row>
      </Col>
    </Container>
  );
}
