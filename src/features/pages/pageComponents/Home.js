import React, { useState } from "react";

import QuestionCard from "../cardComponents/QuestionCard";
import HomeButtonGroup from "../../utils/HomeButtonGroup";

import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import { selectUsers } from "./../../users/usersSlice";
import { selectLoggedInUser } from "./../../users/loggedInSlice";
import { selectQuestionsArr } from "./../../questions/questionsSlice";

function Home() {
  //State data
  const user = useSelector(selectLoggedInUser);
  const allUsers = useSelector(selectUsers);
  const questionsArr = useSelector(selectQuestionsArr);

  //Toggle Home Button Group
  const [answeredQs, setAnsweredQs] = useState(false);
  const qsHandler = () => {
    return setAnsweredQs(!answeredQs);
  };

  //Sort questions data in reverse date order
  const questionsData = questionsArr.slice().sort((a, b) => {
    return b.dateAsked.localeCompare(a.dateAsked);
  });

  //Sort questions into answered / unanswered
  const [answered, unanswered] = [[], []];
  questionsData.map((question) => {
    if (question.answers[user.id]) {
      answered.push(question);
    } else {
      unanswered.push(question);
    }
  });

  const mappedAnswered = answered.map((question) => {
    return (
      <QuestionCard
        user={user}
        key={question.questionId}
        id={question.questionId}
        name={question.asker}
        askerId={question.askerId}
        question={question.A}
        answers={question.answers}
        avatar={question.avatar}
        likes={question.likes}
        link={`/questions/${question.questionId}`}
      />
    );
  });

  const mappedUnanswered = unanswered.map((question) => {
    return (
      <QuestionCard
        user={user}
        key={question.questionId}
        id={question.questionId}
        name={question.asker}
        askerId={question.askerId}
        question={question.A}
        answers={question.answers}
        avatar={question.avatar}
        likes={question.likes}
        link={`/answer/${question.questionId}`}
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
