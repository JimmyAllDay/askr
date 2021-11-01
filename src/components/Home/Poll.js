import React from "react";

// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function Poll(props) {
  const { id } = useParams();
  const userId = props.user.id;
  const data = props.props.filter((question) => question.key === id)[0];
  const answersArray = data.answers;
  const totalAnswers = data.answers.length;
  const answerA = data.questionOptionA;
  const answerB = data.questionOptionB;
  const totalAnswerA = [];
  const totalAnswerB = [];
  data.answers.forEach((answer) => {
    if (answer.answer === answerA) {
      totalAnswerA.push(answer);
    }
    if (answer.answer === answerB) {
      totalAnswerB.push(answer);
    }
  });
  const totalA = totalAnswerA.length;
  const totalB = totalAnswerB.length;
  function calcPercent(answers, total) {
    return Math.round((answers / total) * 100);
  }
  function getUserAnswer() {
    const answerObject = answersArray.find((answer) => answer.id === userId);
    return answerObject.answer;
  }

  return (
    // Container
    <div className="w-50 mt-5 main-col home-background d-flex flex-column">
      <div className="w-100 main-header-background new-q-header-border">
        <h6 className="new-q-header-background my-auto">Poll</h6>
      </div>
      <div className="p-2 home-background">
        {/* Card Border */}
        <div className="card-border-background">
          {/* Card row 1 */}
          <div className="d-flex flex-row q-header">
            <div className="question-avatar-container">
              <img
                src={data.avatar}
                alt="avatar"
                className="question-avatar m-1"
              ></img>
            </div>
            <h5 className="ms-3 mt-2 q-card-text">{`${data.asker} asked:`}</h5>
          </div>
          {/* Card row 2*/}
          <div className="">
            <h6 className="ms-3 mt-2 q-card-text">Would you rather:</h6>
            <div className="d-flex justify-content-around">
              <h5 className="my-auto col p-2">{answerA}</h5>
              <h6 className="my-auto m-4">or</h6>
              <h5 className="my-auto col p-2">{answerB}</h5>
            </div>
          </div>

          {/* Card row 3 */}
          <div className="q-card-text d-flex flex-column mx-auto p-2">
            <h5 className="p-2 m-auto">{`You answered: ${getUserAnswer()}`}</h5>
            <div className="d-flex mt-3">
              <div className="w-75 border border-primary">
                <p className="my-auto">{`${calcPercent(
                  totalA,
                  totalAnswers
                )} %`}</p>
              </div>
              <p className="my-auto ms-5">{`${totalAnswerA.length} / ${totalAnswers} answers`}</p>
            </div>
            <div className="d-flex">
              <div className="w-75 border border-primary mt-2">
                <p className="my-auto">{`${calcPercent(
                  totalB,
                  totalAnswers
                )} %`}</p>
              </div>
              <p className="my-auto ms-5">{`${totalAnswerB.length} / ${totalAnswers} answers`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
