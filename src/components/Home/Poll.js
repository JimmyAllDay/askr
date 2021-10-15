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
    <div className="w-75 mt-2">
      <div className="d-flex justify-content-center w-100">
        <div className="w-100 border home-button">
          <h5>Poll</h5>
        </div>
      </div>
      <div className="w-100 border p-2">
        <div className="d-flex flex-column justify-content-center">
          <div className="w-100 border mb-2">
            <div className="border d-flex justify-content-start">
              <h3 className="ms-4 my-auto p-2">{data.asker} asked:</h3>
              <div className="border d-flex">
                <h5 className="p-2 ms-5 my-2">
                  {`Would you rather ${answerA} or ${answerB} ?`}{" "}
                </h5>
              </div>
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
                  <h5 className="p-2 m-auto">{`Your answer was: ${getUserAnswer()}`}</h5>
                </div>
                <div className="px-1 py-3 border d-flex flex-row gap-2">
                  <div className="w-25 justify-content-start text-start">
                    <h5>{data.questionOptionA}</h5>
                  </div>
                  <div className="w-50 border border-primary">
                    <p className="my-1">{`${calcPercent(
                      totalA,
                      totalAnswers
                    )} %`}</p>
                  </div>
                  <div className="my-auto">
                    <p className="">{`${totalAnswerA.length} / ${totalAnswers} total answers`}</p>
                  </div>
                </div>
                <div className="px-1 py-3 border d-flex flex-row gap-2">
                  <div className="w-25 justify-content-start text-start">
                    <h5>{data.questionOptionB}</h5>
                  </div>
                  <div className="w-50 border border-primary">
                    <p className="my-1">{`${calcPercent(
                      totalB,
                      totalAnswers
                    )} %`}</p>
                  </div>
                  <div className="my-auto">
                    <p className="">{`${totalAnswerB.length} / ${totalAnswers} total answers`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
