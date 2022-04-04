import React from "react";

import PollPercentageBar from "./PollPercentageBar";

import { Container, Row, Col } from "react-bootstrap";

export default function PollAnswers({ data, answersArray, userId }) {
  const totalAnswers = answersArray.length;
  const answerA = data.questionOptionA;
  const answerB = data.questionOptionB;
  const totalAnswerA = [];
  const totalAnswerB = [];
  answersArray.forEach((answer) => {
    if (answer.answer === answerA) {
      totalAnswerA.push(answer);
    }
    if (answer.answer === answerB) {
      totalAnswerB.push(answer);
    }
  });
  const totalA = totalAnswerA.length;
  const totalB = totalAnswerB.length;

  function getUserAnswer() {
    const answerObject = answersArray.find((answer) => answer.id === userId);
    return answerObject && answerObject.answer;
  }

  return (
    <Container fluid className="d-flex flex-column px-1">
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
      <Row className="d-flex py-4 m-0 mt-2">
        <h6>You answered:</h6>
        <h5 className="ms-5 text-primary">{`${getUserAnswer()}`}</h5>
      </Row>

      <Row className="p-0 m-0 pt-3 d-flex">
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
