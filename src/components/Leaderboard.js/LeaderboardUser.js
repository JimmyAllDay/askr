import React from "react";

function LeaderboardUser(props) {
  function score() {
    return props.questionsAsked + props.questionsAnswered;
  }
  return (
    <div className="w-100 border p-2 d-flex flex-column">
      <div className="border d-flex justify-content-start">
        <h3 className="ms-4 my-auto p-2">{props.name}</h3>
      </div>

      <div className="d-flex justify-content-start">
        <div className="border">
          <div className="border question-avatar-container p-2">
            <img
              src={props.avatar}
              alt="avatar"
              className="question-avatar"
            ></img>
          </div>
        </div>
        <div className="border w-100 d-flex flex-column">
          <div className="d-grid border p-2 w-100 h-50 align-self-center">
            <h4 className="mt-1">Questions Asked</h4>
            <h4 className="mt-1">{props.questionsAsked}</h4>
          </div>
          <div className="d-grid border p-2 w-100 h-50 align-self-center">
            <h4 className="mt-1">Questions Answered</h4>
            <h4 className="mt-1">{props.questionsAnswered}</h4>
          </div>
        </div>
        <div className="w-25 border">
          <div className="h-25 border">
            <h4 className="mt-2">Score</h4>
          </div>
          <div className="">
            <h1 className="mt-5">{score()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardUser;
