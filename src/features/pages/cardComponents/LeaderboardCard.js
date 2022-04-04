import React from "react";

import { Container, Col } from "react-bootstrap";

export default function LeaderboardCard(props) {
  const { questionsAsked, questionsAnswered, totalLikes } = props;

  const likes = totalLikes.length > 0 ? totalLikes.length : 0;

  function score() {
    return questionsAsked + questionsAnswered + likes;
  }

  return (
    <Container className="p-0 d-flex d-flex justify-content-between mt-4">
      <Col className="ms-2">
        <div className="d-flex">
          <p className="my-auto">Questions Asked:</p>
          <p className="my-auto ms-2">{questionsAsked}</p>
        </div>
        <div className="d-flex">
          <p className="my-auto">Questions Answered:</p>
          <p className="my-auto ms-2">{questionsAnswered}</p>
        </div>
        <div className="d-flex">
          <p className="my-auto">Question Likes:</p>
          <p className="my-auto ms-2">{likes}</p>
        </div>
      </Col>
      <Col className="d-flex">
        <h4 className="my-auto">Total Score:</h4>
        <h1 className="my-auto ms-2 me-2">{score()}</h1>
      </Col>
    </Container>
  );
}
