import React from "react";

// import { useDispatch } from "react-redux";
// import { questionLiked } from "../../features/questions/questionsSlice";

import CardLikes from "./CardLikes";
import CardHeader from "./CardHeader";

import { Link } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import WouldYouText from "./WouldYouText";

export default function QuestionCard(props) {
  const { avatar, name, likes, question } = props;

  // const dispatch = useDispatch();
  const userId = Number(props.user.id);
  const likesArray = props.likes;

  function sortLinks() {
    const answers = props.answers;
    const userID = props.user.id;
    let answered = false;
    answers.find((answer) => {
      if (answer.id == userID) {
        answered = true;
      }
    });
    return answered === true ? `/questions/${props.id}` : `/answer/${props.id}`;
  }

  function likeQuestion() {
    const isQLiked = likesArray.find((like) => {
      like.id == userId;
    });

    return console.log(isQLiked);
  }

  function likeCount(likes) {
    return likes.length;
  }

  return (
    <Link
      to={sortLinks()}
      className="text-light"
      style={{ textDecoration: "none" }}
    >
      <Container fluid className="p-0 mt-1 border border-dark bg-dark">
        <CardHeader
          avatar={avatar}
          name={name}
          text={"Asks:"}
          subComp={
            <CardLikes
              likes={likes}
              likeQuestion={likeQuestion}
              likeCount={likeCount}
            />
          }
        />

        <Col className="d-flex flex-column">
          <WouldYouText />

          <h3 className="align-self-center text-primary">{question}</h3>
          <h6 className="align-self-center text-primary">or...</h6>
        </Col>
      </Container>
    </Link>
  );
}
