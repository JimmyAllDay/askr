import React from "react";

import { Container, Col } from "react-bootstrap";

export default function LeaderboardCard({ questionsAsked, questionsAnswered }) {
  function score() {
    return questionsAsked + questionsAnswered;
  }

  return (
    <Container className="p-0 d-flex d-flex justify-content-between mt-4">
      <Col className="ms-2">
        <div className="q-card-text d-flex">
          <p className="q-card-text my-auto">Questions Asked:</p>
          <p className="my-auto ms-2">{questionsAsked}</p>
        </div>
        <div className="q-card-text d-flex">
          <p className="q-card-text my-auto">Questions Answered:</p>
          <p className="my-auto ms-2">{questionsAnswered}</p>
        </div>
      </Col>
      <Col className="q-card-text d-flex">
        <h4 className="q-card-text my-auto">Total Score:</h4>
        <h1 className="my-auto ms-2 me-2">{score()}</h1>
      </Col>
    </Container>
  );
}
