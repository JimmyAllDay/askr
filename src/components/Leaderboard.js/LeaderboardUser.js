import React from "react";

function LeaderboardUser(props) {
  function score() {
    return props.questionsAsked + props.questionsAnswered;
  }
  return (
    // Card border
    <div className="card-border-background mt-2">
      {/* Card row 1 */}
      <div className="d-flex flex-row q-header">
        <div className="question-avatar-container">
          <img
            src={props.avatar}
            alt="avatar"
            className="question-avatar m-1"
          ></img>
        </div>
        <h5 className="ms-3 mt-2 q-card-text me-auto">{`${props.name} `}</h5>
      </div>
      {/* Card row 2*/}
      <div className="d-flex d-flex justify-content-between mt-4">
        <div className="ms-2">
          <div className="q-card-text d-flex">
            <p className="q-card-text my-auto">Questions Asked:</p>
            <p className="my-auto ms-2">{props.questionsAsked}</p>
          </div>
          <div className="q-card-text d-flex">
            <p className="q-card-text my-auto">Questions Answered:</p>
            <p className="my-auto ms-2">{props.questionsAnswered}</p>
          </div>
        </div>
        <div className="q-card-text d-flex">
          <h4 className="q-card-text my-auto">Total Score:</h4>
          <h1 className="my-auto ms-2 me-2">{score()}</h1>
        </div>
      </div>
    </div>

    // <div className="mx-2 mt-2">
    //   <div className="leaderboard-user-header d-flex justify-content-start ">
    //     <h3 className="ms-4 my-auto p-2 leaderboard-user-header-background">
    //       {props.name}
    //     </h3>
    //   </div>

    //   <div className="d-flex justify-content-start leaderboard-user-border">
    //     <div className="border">
    //       <div className="question-avatar-container p-2">
    //         <img
    //           src={props.avatar}
    //           alt="avatar"
    //           className="question-avatar"
    //         ></img>
    //       </div>
    //     </div>
    //     <div className="border w-100 d-flex flex-column">
    //       <div className="d-grid border p-2 w-100 h-50 align-self-center">
    //         <h4 className="mt-1">Questions Asked</h4>
    //         <h4 className="mt-1">{props.questionsAsked}</h4>
    //       </div>
    //       <div className="d-grid border p-2 w-100 h-50 align-self-center">
    //         <h4 className="mt-1">Questions Answered</h4>
    //         <h4 className="mt-1">{props.questionsAnswered}</h4>
    //       </div>
    //     </div>
    //     <div className="w-25 leaderboard-score-container">
    //       <div className="h-25 leaderboard-score-header-background border leaderboad-score-header-boarder">
    //         <h4 className="mt-2 leaderboard-score-header-background">Score</h4>
    //       </div>
    //       <div className="">
    //         <h1 className="mt-5">{score()}</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LeaderboardUser;
