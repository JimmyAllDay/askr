import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { questionUpdated } from "../../features/questions/questionsSlice";

import { useParams, Redirect } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Answer(props) {
  const { id } = useParams();
  const data = props.data.filter((question) => question.key === id)[0];
  const user = props.user;
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState("");
  const [redirect, setRedirect] = useState(false);

  const formStateHandler = (e) => setAnswer(e.target.value);
  const submitForm = () => {
    if (answer != "") {
      const answers = data.answers;
      const userAnswer = { id: user.id, answer: answer };
      const newAnswers =
        answers[0].id == "" ? [userAnswer] : [...answers, userAnswer];
      dispatch(
        questionUpdated({
          key: data.key,
          answers: newAnswers,
        })
      );

      setAnswer("");
      setRedirect(true);
    }
  };

  return (
    <div className="w-75 mt-2">
      {redirect ? <Redirect to="/" /> : null}
      <div className="d-flex justify-content-center w-100">
        <div className="w-100 border home-button">
          <h5>Answer</h5>
        </div>
      </div>
      <div className="w-100 border p-2">
        <div className="d-flex flex-column justify-content-center">
          <div className="w-100 border mb-2">
            <div className="border d-flex justify-content-start">
              <h3 className="ms-4 my-auto p-2">{data.asker} asks:</h3>
            </div>
            <div className="d-flex justify-content-start">
              <div className="border">
                <div className="question-avatar-container p-2">
                  <img
                    src={data.avatar}
                    alt="avatar"
                    className="question-avatar"
                  ></img>
                </div>
              </div>
              <div className="border w-100 d-flex flex-column">
                <div className="border d-flex">
                  <h3 className="p-2 ms-5 mt-4">Would you rather?</h3>
                </div>
                <div className="border p-2">
                  <form onChange={(e) => formStateHandler(e)}>
                    <input
                      className="me-3"
                      name="whaddayawant"
                      type="radio"
                      value={data.questionOptionA}
                    />
                    <label>
                      <h4>{data.questionOptionA}</h4>
                    </label>
                    <h5>or...</h5>
                    <input
                      className="me-3"
                      name="whaddayawant"
                      type="radio"
                      value={data.questionOptionB}
                    />
                    <label>
                      <h4>{data.questionOptionB}</h4>
                    </label>
                  </form>
                </div>
                <div className="p-3 border d-grid gap-2">
                  <Button type="submit" onClick={() => submitForm()}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
