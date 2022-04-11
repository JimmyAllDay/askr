import React from "react";

import PollPercentageBar from "./PollPercentageBar";

import { Container, Row, Col } from "react-bootstrap";

export default function PollAnswers({ data, userId }) {
  const answers = data.answers;
  const totalAnswers = Object.keys(answers).length;
  const answerA = data.A;
  const answerB = data.B;
  const answersArray = Object.values(data.answers);
  const totalAnswerA = [];
  const totalAnswerB = [];
  answersArray.forEach((answer) => {
    answer === "A" ? totalAnswerA.push(answer) : totalAnswerB.push(answer);
  });
  const totalA = totalAnswerA.length;
  const totalB = totalAnswerB.length;

  const userAnswer = data[answers[userId]];

  return (
    <Container fluid className="d-flex flex-column px-1 pt-4">
      <Row className="p-0 m-0">
        <Col xs={5} className="d-flex flex-column align-items-center">
          <h5 className="my-auto text-center">{answerA}</h5>
        </Col>
        <Col xs={2} className="d-flex flex-column align-items-center">
          <h6 className="my-auto">or</h6>
        </Col>
        <Col xs={5} className="d-flex flex-column align-items-center">
          <h5 className="my-auto text-center">{answerB}</h5>
        </Col>
      </Row>
      <Row className="py-2 m-0 mt-4">
        <Col className="d-flex flex-column">
          <h6 className="me-auto">You answered:</h6>
          <h2 className="text-primary mx-auto">{`${userAnswer}`}</h2>
        </Col>
      </Row>

      <Row className="p-0 m-0 pt-2 d-flex">
        <h6 className="my-auto">Others answered:</h6>
      </Row>

      <PollPercentageBar
        userAnswerString={answerA}
        answers={totalA}
        totalAnswers={totalAnswers}
        variantColor={"danger"}
      />
      <PollPercentageBar
        userAnswerString={answerB}
        answers={totalB}
        totalAnswers={totalAnswers}
        variantColor={"primary"}
      />
    </Container>
  );
}
