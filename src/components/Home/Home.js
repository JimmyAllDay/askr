import React, { useState } from "react";
import Question from "./Question";

function Home(props) {
  const [answeredQs, setAnsweredQs] = useState(false);

  const questionsData = props.questions.slice().sort(function (a, b) {
    return b.dateAsked.localeCompare(a.dateAsked);
  });
  console.log(questionsData);
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
    <div className="w-50 mt-5 main-col home-background">
      <div className="d-flex justify-content-center w-100">
        <div
          className={`w-50 home-button home-menu-btn ${
            answeredQs ? "active-home-qs-menu-btn" : "inactive-home-qs-menu-btn"
          }`}
          onClick={() => setAnsweredQs(true)}
        >
          <h6
            className={`my-auto ${
              answeredQs
                ? "active-home-qs-menu-btn"
                : "inactive-home-qs-menu-btn"
            }`}
          >
            Answered Questions
          </h6>
        </div>
        <div
          className={`w-50 home-button home-menu-btn-right ${
            answeredQs ? "inactive-home-qs-menu-btn" : "active-home-qs-menu-btn"
          }`}
          onClick={() => setAnsweredQs(false)}
        >
          <h6
            className={`my-auto ${
              answeredQs
                ? "inactive-home-qs-menu-btn"
                : "active-home-qs-menu-btn"
            }`}
          >
            Unanswered Questions
          </h6>
        </div>
      </div>
      <div className="w-100 pb-2 px-2 home-background">
        <div className="d-flex flex-column justify-content-center home-background">
          {answeredQs === true ? mappedAnswered : mappedUnanswered}
        </div>
      </div>
    </div>
  );
}

export default Home;
