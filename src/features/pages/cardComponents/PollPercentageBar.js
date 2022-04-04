import React from "react";

import { Container, ProgressBar, Col } from "react-bootstrap";

export default function PollPercentageBar({
  userAnswerString,
  answers,
  totalAnswers,
  variantColor,
}) {
  function calcPercent(answers, total) {
    return Math.round((answers / total) * 100);
  }

  return (
    <Container className="d-flex px-1 py-2">
      <Col xs={3} sm={4} className="d-flex px-2">
        <p className={`my-auto text-center text-${variantColor}`}>
          {userAnswerString}
        </p>
      </Col>
      <Col xs={7} className="d-flex p-1">
        <ProgressBar
          style={{ height: "40px" }}
          animated={false}
          variant={variantColor}
          className="w-100 my-auto"
          now={calcPercent(answers, totalAnswers)}
          label={`${calcPercent(answers, totalAnswers)}%`}
        />
      </Col>
      <Col xs={2} sm={1} className="d-flex flex-column align-items-center">
        <p
          className={`my-auto text-${variantColor}`}
        >{`${answers} / ${totalAnswers}`}</p>
      </Col>
    </Container>
  );
}
