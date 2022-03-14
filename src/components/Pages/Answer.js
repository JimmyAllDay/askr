import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { questionUpdated } from "../../features/questions/questionsSlice";
import { userUpdated } from "../../features/users/usersSlice";

import { useParams, Redirect } from "react-router-dom";

import { Container, Col, Button } from "react-bootstrap";

import CardHeader from "../CardComponents/CardHeader";

import CardLikes from "../CardComponents/CardLikes";
import WouldYouText from "../CardComponents/WouldYouText";

function Answer(props) {
  const { user } = props;
  const { id } = useParams();
  const data = props.data.filter((question) => question.key === id)[0];

  const dispatch = useDispatch();

  const [answer, setAnswer] = useState("");
  const [redirect, setRedirect] = useState(false);

  const formStateHandler = (e) => setAnswer(e.target.value);
  // TODO: this logic should be moved into the reducer
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
    <Container fluid className="p-0 border border-dark bg-dark text-light">
      {redirect && <Redirect to={`/questions/${id}`} />}

      <CardHeader
        avatar={data.avatar}
        name={data.asker}
        text={"Asks:"}
        subComp={
          <CardLikes
            likes={data.likes}
            userId={user.id}
            askerId={data.askerId}
            questionId={id}
          />
        }
      />

      <Col className="d-flex flex-column pt-2">
        <WouldYouText />
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
            className="mx-5 mb-2"
            type="submit"
            onClick={() => submitForm()}
          >
            Submit
          </Button>
        </div>
      </Col>
    </Container>
  );
}

export default Answer;
