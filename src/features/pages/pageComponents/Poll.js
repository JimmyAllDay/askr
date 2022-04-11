import React from "react";
import CardHeader from "../cardComponents/CardHeader";
import WouldYouText from "../cardComponents/WouldYouText";
import PollAnswers from "../cardComponents/PollAnswers";
import CardLikes from "../cardComponents/CardLikes";

import { useSelector } from "react-redux";
import { selectQuestions } from "../../questions/questionsSlice";
import { selectLoggedInUser } from "../../users/loggedInSlice";

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

function Poll() {
  const questions = useSelector(selectQuestions);
  const user = useSelector(selectLoggedInUser);
  const { id } = useParams();
  const userId = user.id;
  const data = questions[id];

  return (
    <Container className="p-0 blur-bg text-light rounded-3">
      <CardHeader
        avatar={data.avatar}
        name={data.asker}
        text={"Asked:"}
        subComp={
          <CardLikes
            likes={data.likes}
            userId={userId}
            askerId={data.askerId}
            questionId={id}
          />
        }
      />

      <WouldYouText />

      <PollAnswers data={data} userId={userId} />
    </Container>
  );
}

export default Poll;
