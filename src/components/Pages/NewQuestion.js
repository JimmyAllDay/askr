import React, { useState } from "react";

import CardHeader from "../CardComponents/CardHeader";
import WouldYouText from "../CardComponents/WouldYouText";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { questionAdded } from "../../features/questions/questionsSlice.js";
import { userUpdated } from "../../features/users/usersSlice.js";

import { Redirect } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

function NewQuestion() {
  const user = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [placeholder] = useState({
    a: `Attend Rage-A-Holics`,
    b: `Lose it`,
  });

  const handleChangeOptionA = (e) => setOptionA(e.target.value);
  const handleChangeOptionB = (e) => setOptionB(e.target.value);

  const createNewQuestion = (loggedInUser) => {
    const date = new Date().toString();

    if (optionA !== "" && optionB !== "") {
      dispatch(
        questionAdded({
          key: nanoid(),
          dateAsked: date,
          asker: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
          avatar: loggedInUser.avatar,
          questionOptionA: optionA,
          questionOptionB: optionB,
          answers: [{ id: "", answer: "" }],
        })
      );
      dispatch(
        userUpdated({
          id: user.id,
          questionsAsked: 1,
          questionsAnswered: 0,
          totalPoints: 1,
        })
      );
      setOptionA("");
      setOptionB("");
      setRedirect(true);
    }
  };

  return (
    <Container fluid className="p-0 border border-dark p-2">
      {redirect && <Redirect to="/" />}
      <CardHeader
        avatar={null}
        name={`${user.firstName},`}
        text={"Finish the question"}
        subComp={null}
      />

      <div className="d-flex flex-column mt-2">
        <WouldYouText />
        <input
          className="new-q-input mt-2"
          placeholder={placeholder.a}
          onChange={(e) => handleChangeOptionA(e)}
          value={optionA}
        />
        <h6 className="my-2 align-self-center">or...</h6>
        <input
          className="new-q-input"
          placeholder={placeholder.b}
          onChange={(e) => handleChangeOptionB(e)}
          value={optionB}
        />

        <Button
          className="global-button mx-auto mt-2"
          onClick={() => createNewQuestion(user)}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default NewQuestion;
