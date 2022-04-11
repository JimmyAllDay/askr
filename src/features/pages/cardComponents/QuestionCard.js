import React from "react";

import CardLikes from "./CardLikes";
import CardHeader from "./CardHeader";

import { Link } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import WouldYouText from "./WouldYouText";

export default function QuestionCard(props) {
  const {
    avatar,
    name,
    askerId,
    likes,
    question,
    user,
    //answers,
    link,
    id,
  } = props;

  const userId = Number(user.id);

  return (
    <Link
      to={link}
      className="text-light"
      onMouseDown={(e) => e.stopPropagation}
      style={{ textDecoration: "none" }}
    >
      <Container fluid className="p-0 mt-1 blur-bg rounded-3">
        <CardHeader
          avatar={avatar && avatar}
          name={name}
          text={"Asks:"}
          subComp={
            <CardLikes
              likes={likes}
              askerId={askerId}
              userId={userId}
              questionId={id}
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
