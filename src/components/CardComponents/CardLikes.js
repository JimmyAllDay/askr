import React from "react";

import { Container } from "react-bootstrap";

import { Icon } from "@iconify/react";

import { useDispatch } from "react-redux";
import {
  questionLiked,
  questionUnLiked,
} from "../../features/questions/questionsSlice";
import {
  userLikesIncremented,
  userLikesDecremented,
} from "../../features/users/usersSlice";

export default function CardLikes({ likes, userId, askerId, questionId }) {
  const dispatch = useDispatch();
  askerId = askerId.toString();

  // Count number of likes for this card
  const likeCount = (likes) => likes.length;

  // Check whether user has already liked this question
  // ? Is it better to use a function within the questionLiked reducer to check this? Checking both here and in the reducer may be appropriate
  const checkLiked = (qLikesArr, userIdent) =>
    qLikesArr.find((like) => like.id === userIdent);

  // Increment likes
  const incrementLikes = () => {
    dispatch(
      questionLiked({
        key: questionId,
        like: { id: `${userId}` },
      })
    ),
      dispatch(
        userLikesIncremented({
          askerId: `${askerId}`,
        })
      );
  };

  // Decrement likes
  const decrementLikes = () => {
    dispatch(
      questionUnLiked({
        key: questionId,
        like: { id: `${userId}` },
      })
    ),
      dispatch(
        userLikesDecremented({
          askerId: `${askerId}`,
        })
      );
  };

  // Increment or decrement likes based on whether user has already liked question
  const handleLikes = () => {
    checkLiked(likes, userId) ? decrementLikes() : incrementLikes();
  };

  return (
    <Container
      fluid
      className="p-0 m-0 d-flex"
      onMouseDown={(e) => e.stopPropagation}
      onClick={() => handleLikes()}
    >
      <div className="d-flex ms-auto p-1">
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
