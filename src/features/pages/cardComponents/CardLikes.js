import React from "react";

import { Container } from "react-bootstrap";

import { Icon } from "@iconify/react";

import { useDispatch } from "react-redux";
import { questionLikesUpdated } from "../../questions/questionsSlice";

export default function CardLikes({ likes, userId, askerId, questionId }) {
  const dispatch = useDispatch();

  // Count number of likes for this card
  const likeCount = (likes) => likes.length;

  // Increment likes
  const updateLikes = () => {
    userId !== askerId &&
      dispatch(
        questionLikesUpdated({
          key: questionId,
          like: userId,
        })
      );
  };

  return (
    <Container fluid className="p-0 m-0 d-flex">
      <div
        className="d-flex ms-auto p-1"
        onClick={(e) => {
          e.preventDefault();
          updateLikes();
        }}
        onMouseOver={null}
        style={{ cursor: "pointer" }}
      >
        <p className="my-auto ms-auto">{likeCount(likes)}</p>
        <div className="d-flex ms-1">
          {likes.length > 0 ? (
            <Icon
              icon="ant-design:heart-filled"
              className="my-auto"
              style={
                userId === askerId
                  ? { color: "rgb(175, 72, 53)" }
                  : { color: "tomato" }
              }
            />
          ) : (
            <Icon
              icon="ant-design:heart-outlined"
              className="my-auto"
              style={
                userId === askerId
                  ? { color: "rgb(175, 72, 53)" }
                  : { color: "tomato" }
              }
            />
          )}
        </div>
      </div>
    </Container>
  );
}
