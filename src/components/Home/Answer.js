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
    <div className="w-50 mt-5 main-col home-background d-flex flex-column">
      {redirect && <Redirect to={`/questions/${id}`} />}
      <div className="w-100 main-header-background new-q-header-border">
        <h6 className="new-q-header-background my-auto">Answer</h6>
      </div>
      <div className="p-2 home-background">
        {/* Card Border */}
        <div className="card-border-background">
          {/* Card row 1 */}
          <div className="d-flex flex-row q-header ">
            <div className="question-avatar-container">
              <img
                src={data.avatar}
                alt="avatar"
                className="question-avatar m-1"
              ></img>
            </div>
            <h5 className="ms-3 mt-2 q-card-text me-auto">{`${data.asker}, asks:`}</h5>
          </div>
          {/* Card row 2*/}
          <div className="">
            <h6 className="q-card-text my-auto mb-1">Would you rather?</h6>
          </div>

          {/* Card row 3 */}
          <div className="q-card-text d-flex flex-column">
            <form onChange={(e) => formStateHandler(e)}>
              <div className="col d-flex">
                <div className="d-flex flex-column align-items-start mx-auto">
                  <div className="">
                    <input
                      className="me-3 mt-4"
                      name="q-answer"
                      type="radio"
                      value={data.questionOptionA}
                    />
                    <label>
                      <h5>{data.questionOptionA}</h5>
                    </label>
                  </div>
                  <div className="align-self-center">
                    <h6>or...</h6>
                  </div>
                  <div className="">
                    <input
                      className="me-3 mt-2"
                      name="q-answer"
                      type="radio"
                      value={data.questionOptionB}
                    />

                    <label>
                      <h5>{data.questionOptionB}</h5>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <Button
              className="global-button my-2"
              type="submit"
              onClick={() => submitForm()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
