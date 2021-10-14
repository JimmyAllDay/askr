import React, { useState } from "react";
import Question from "./Question";

import "../../app/styles/home-styles.css";

function Home(props) {
  const [answeredQs, setAnsweredQs] = useState(false);

  const questionsData = props.questions.slice().sort(function (a, b) {
    return b.dateAsked.localeCompare(a.dateAsked);
  });
  const userData = props.loggedInUser;
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
      <Question
        user={userData}
        key={question.key}
        id={question.key}
        name={question.asker}
        question={question.questionOptionA}
        answers={question.answers}
        avatar={question.avatar}
      />
    );
  });

  const unAnsweredQuestions = questionsData.filter(
    (question) => !answeredQuestions.includes(question)
  );

  const mappedUnanswered = unAnsweredQuestions.map((question) => {
    return (
      <Question
        user={userData}
        key={question.key}
        id={question.key}
        name={question.asker}
        question={question.questionOptionA}
        answers={question.answers}
        avatar={question.avatar}
      />
    );
  });

  return (
    <div className="w-75 mt-2">
      <div className="d-flex justify-content-center w-100">
        <div
          className="w-50 border home-button"
          onClick={() => setAnsweredQs(true)}
        >
          <h5>Answered Questions</h5>
        </div>
        <div
          className="w-50 border home-button"
          onClick={() => setAnsweredQs(false)}
        >
          <h5>Unanswered Questions</h5>
        </div>
      </div>
      <div className="w-100 border p-2">
        <div className="d-flex flex-column justify-content-center">
          {answeredQs === true ? mappedAnswered : mappedUnanswered}
        </div>
      </div>
    </div>
  );
}

export default Home;
