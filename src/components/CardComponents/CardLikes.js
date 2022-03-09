import React from "react";

import { Container } from "react-bootstrap";

import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

import { IconContext } from "react-icons";

export default function CardLikes({ likes, likeCount, likeQuestion }) {
  return (
    <IconContext.Provider value={{ style: { color: "tomato" } }}>
      <Container
        fluid
        className="p-0 d-flex m-0"
        onClick={() => likeQuestion()}
        style={{ height: "35px", width: "35px" }}
      >
        <p className="my-auto ms-auto">{likeCount(likes)}</p>
        {likes.length > 0 ? (
          <HiHeart className="my-auto ms-auto" />
        ) : (
          <HiOutlineHeart className="my-auto ms-auto" />
        )}
      </Container>
    </IconContext.Provider>
  );
}
