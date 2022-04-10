import React, { useState } from "react";

import CardHeader from "../cardComponents/CardHeader";
import WouldYouText from "../cardComponents/WouldYouText";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { questionAdded } from "../../questions/questionsSlice";

import { selectLoggedInUser } from "../../users/loggedInSlice";

import { Redirect } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

function NewQuestion() {
  const user = useSelector(selectLoggedInUser);
  const { avatar, id, firstName } = user;
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
      const keyName = nanoid();
      const newQuestion = {};
      newQuestion[keyName] = {
        questionId: `${keyName}`,
        dateAsked: date,
        asker: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        askerId: id,
        avatar: avatar,
        A: optionA,
        B: optionB,
        answers: {},
        likes: [],
      };
      dispatch(questionAdded(newQuestion));
      setOptionA("");
      setOptionB("");
      setRedirect(true);
    }
  };

  return (
    <Container fluid className="p-0 border border-dark p-2">
      {redirect && <Redirect to="/" />}
      <CardHeader
        avatar={avatar}
        name={`${firstName},`}
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
