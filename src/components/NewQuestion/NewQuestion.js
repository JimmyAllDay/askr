import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { questionAdded } from "../../features/questions/questionsSlice.js";
import { userUpdated } from "../../features/users/usersSlice.js";

import { Redirect } from "react-router-dom";

import Button from "react-bootstrap/Button";

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
    // Container
    <div className="w-50 mt-5 main-col home-background d-flex flex-column">
      {redirect && <Redirect to="/" />}
      <div className="w-100 main-header-background new-q-header-border">
        <h6 className="new-q-header-background my-auto">New Question</h6>
      </div>
      <div className="p-2 home-background">
        {/* Card Border */}
        <div className="card-border-background">
          {/* Card row 1 */}
          <div className="d-flex flex-row q-header ">
            <div className="question-avatar-container">
              <img
                src={user.avatar}
                alt="avatar"
                className="question-avatar m-1"
              ></img>
            </div>
            <h6 className="ms-3 mt-2 q-card-text me-auto">{`${user.firstName}, finish the question:`}</h6>
          </div>
          {/* Card row 2*/}
          <div className="">
            <h6 className="q-card-text my-auto mb-1">Would you rather?</h6>
          </div>

          {/* Card row 3 */}
          <div className="q-card-text d-flex flex-column  w-75 mx-auto p-2">
            <input
              className="new-q-input mt-2"
              placeholder={placeholder.a}
              onChange={(e) => handleChangeOptionA(e)}
              value={optionA}
            />
            <h6 className="q-card-text mt-2">or...</h6>
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
        </div>
      </div>
    </div>
  );
}

export default NewQuestion;
