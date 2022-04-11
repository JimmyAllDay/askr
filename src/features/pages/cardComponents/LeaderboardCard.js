import React from "react";

import { Container, Col } from "react-bootstrap";

export default function LeaderboardCard(props) {
  const { questions, answers, likes, totalPoints } = props;

  return (
    <Container className="p-0 d-flex justify-content-between mt-4 pb-2">
      <Col className="ms-2">
        <div className="d-flex">
          <p className="my-auto">Questions Asked:</p>
          <p className="my-auto ms-2">{questions}</p>
        </div>
        <div className="d-flex">
          <p className="my-auto">Questions Answered:</p>
          <p className="my-auto ms-2">{answers}</p>
        </div>
        <div className="d-flex">
          <p className="my-auto">Likes Received:</p>
          <p className="my-auto ms-2">{likes}</p>
        </div>
      </Col>
      <Col className="d-flex">
        <h4 className="my-auto ms-auto">Total Score:</h4>
        <h1 className="my-auto ms-2 me-2 ">{totalPoints}</h1>
      </Col>
    </Container>
  );
}
