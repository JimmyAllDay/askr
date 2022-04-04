import React, { useState } from "react";

import QuestionCard from "../cardComponents/QuestionCard";
import HomeButtonGroup from "../../utils/HomeButtonGroup";

import { Container } from "react-bootstrap";

function Home(props) {
  const { questions, loggedInUser } = props;
  const [answeredQs, setAnsweredQs] = useState(false);

  const qsHandler = () => {
    return setAnsweredQs(!answeredQs);
  };

  const questionsData = questions.slice().sort(function (a, b) {
    return b.dateAsked.localeCompare(a.dateAsked);
  });
  const userData = loggedInUser;
  const userId = userData.id;

  const answeredQuestions = [];
  questionsData.forEach((question) => {
    question.answers.forEach((answer) => {
      if (answer.id == userId) {
        answeredQuestions.push(question);
      }
    });
  });

  const mappedAnswered = answeredQuestions.map((question) => {
    return (
      <QuestionCard
        user={userData}
        key={question.key}
        id={question.key}
        name={question.asker}
        askerId={question.askerId}
        question={question.questionOptionA}
        answers={question.answers}
        avatar={question.avatar}
        likes={question.likes}
      />
    );
  });

  const unAnsweredQuestions = questionsData.filter(
    (question) => !answeredQuestions.includes(question)
  );

  const mappedUnanswered = unAnsweredQuestions.map((question) => {
    return (
      <QuestionCard
        user={userData}
        key={question.key}
        id={question.key}
        name={question.asker}
        askerId={question.askerId}
        question={question.questionOptionA}
        answers={question.answers}
        avatar={question.avatar}
        likes={question.likes}
      />
    );
  });

  return (
    <Container fluid className="p-0">
      <HomeButtonGroup handler={qsHandler} />
      {answeredQs === true ? mappedAnswered : mappedUnanswered}
    </Container>
  );
}

export default Home;
