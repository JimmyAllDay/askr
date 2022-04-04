import React from "react";

import { Container } from "react-bootstrap";

import { Icon } from "@iconify/react";

import { useDispatch } from "react-redux";
import { questionLikesUpdated } from "../../questions/questionsSlice";
import { userLikesUpdated } from "../../users/usersSlice";

export default function CardLikes({ likes, userId, askerId, questionId }) {
  const dispatch = useDispatch();
  askerId = askerId.toString();

  // Count number of likes for this card
  const likeCount = (likes) => likes.length;

  // Increment likes
  const updateLikes = () => {
    dispatch(
      questionLikesUpdated({
        key: `${questionId}`,
        like: { id: `${userId}` },
      })
    );
    dispatch(
      userLikesUpdated({
        askerId: `${askerId}`,
        like: { id: `${userId}` },
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
        style={{ cursor: "pointer" }}
      >
        <p className="my-auto ms-auto">{likeCount(likes)}</p>
        <div className="d-flex ms-1">
          {likes.length > 0 ? (
            <Icon
              icon="ant-design:heart-filled"
              className="my-auto"
              style={{ color: "tomato" }}
            />
          ) : (
            <Icon
              icon="ant-design:heart-outlined"
              className="my-auto"
              style={{ color: "tomato" }}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
