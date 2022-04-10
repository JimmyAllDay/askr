import React, { useCallback, useState } from "react";
import CardHeader from "../cardComponents/CardHeader";
import CardLikes from "../cardComponents/CardLikes";
import WouldYouText from "../cardComponents/WouldYouText";

import { useSelector, useDispatch } from "react-redux";
import {
  questionAnswered,
  selectQuestions,
} from "../../questions/questionsSlice";
import { selectLoggedInUser } from "../../users/loggedInSlice";

import { useParams, Redirect } from "react-router-dom";

import { Container, Col, Button } from "react-bootstrap";

function Answer() {
  const questions = useSelector(selectQuestions);
  const user = useSelector(selectLoggedInUser);
  const { id } = useParams();
  const data = questions[id];

  const dispatch = useDispatch();

  const [answer, setAnswer] = useState("");
  const [redirect, setRedirect] = useState(false);

  const formStateHandler = (e) => setAnswer(e.target.value);
  // const forceRedirect = useCallback(() => setRedirect(true), []);

  const submitForm = () => {
    if (answer !== "") {
      const userId = user.id;
      dispatch(questionAnswered({ key: id, userId: userId, answer: answer }));
      setAnswer("");
      setRedirect(true);
      // forceRedirect();
    }
  };

  return (
    <Container fluid className="p-0 blur-bg rounded-3 text-light">
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
                    value={"A"}
                  />
                  <label>
                    <h5>{data.A}</h5>
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
                    value={"B"}
                  />

                  <label>
                    <h5>{data.B}</h5>
                  </label>
                </div>
              </div>
            </div>
          </form>
          <Col className="d-flex mb-2">
            <Button
              className="mx-auto w-75"
              type="submit"
              onClick={() => submitForm()}
            >
              Submit
            </Button>
          </Col>
        </div>
      </Col>
    </Container>
  );
}

export default Answer;
