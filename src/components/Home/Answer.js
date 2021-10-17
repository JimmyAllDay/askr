import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { questionUpdated } from "../../features/questions/questionsSlice";
import { userUpdated } from "../../features/users/usersSlice";

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
      dispatch(
        userUpdated({
          id: user.id,
          questionsAsked: 0,
          questionsAnswered: 1,
          totalPoints: 1,
        })
      );

      setAnswer("");
      setRedirect(true);
    }
  };

  return (
    <div className="w-75 mt-2 leaderboard-border">
      {redirect ? <Redirect to={`/questions/${id}`} /> : null}
      <div className="d-flex justify-content-center w-100 leaderboard-header">
        <div className="w-100 leaderboard-header-background">
          <h5 className="leaderboard-header-background mt-2">Answer</h5>
        </div>
      </div>
      <div className="w-100 border p-2">
        <div className="d-flex flex-column justify-content-center leaderboard-user-border">
          <div className="d-flex justify-content-start leaderboard-user-header-background leaderboad-score-header-boarder">
            <h3 className="ms-4 my-auto p-2 leaderboard-user-header-background ">
              {data.asker} asks:
            </h3>
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
                <h3 className="p-2 ms-5 my-3">Would you rather?</h3>
              </div>
              <div className="border p-2">
                <form onChange={(e) => formStateHandler(e)}>
                  <div className="row d-flex mx-5 my-2 justify-content-center">
                    <div className="col d-flex">
                      <div className="d-flex flex-column align-items-start mx-auto">
                        <div className="">
                          <input
                            className="me-3 mt-2 radio-btn border"
                            name="whaddayawant"
                            type="radio"
                            value={data.questionOptionA}
                          />
                          <label>
                            <h4>{data.questionOptionA}</h4>
                          </label>
                        </div>
                        <div className="align-self-center my-2">
                          <h5>or...</h5>
                        </div>
                        <div className="">
                          <input
                            className="me-3 mt-2"
                            name="whaddayawant"
                            type="radio"
                            value={data.questionOptionB}
                          />

                          <label>
                            <h4>{data.questionOptionB}</h4>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="p-3 border d-grid gap-2">
                <Button
                  className="new-q-button"
                  type="submit"
                  onClick={() => submitForm()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
