import React from "react";

import { Link } from "react-router-dom";

function Question(props) {
  // TODO: refactor, time permitting. Consider pushing this up to parent
  function sortLinks() {
    const answers = props.answers;
    const userID = props.user.id;
    let answered = false;
    answers.find((answer) => {
      if (answer.id == userID) {
        answered = true;
      }
    });
    return answered === true ? `/questions/${props.id}` : `/answer/${props.id}`;
  }
  sortLinks();

  return (
    <div className="w-100 border mb-2 q-border">
      <div className="border d-flex justify-content-start q-header">
        <h3 className="ms-4 my-auto p-2 q-header-username">
          {props.name} asks:
        </h3>
      </div>
      <div className="d-flex justify-content-start">
        <div className="border">
          <div className="question-avatar-container p-2">
            <img
              src={props.avatar}
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
            <h4>{props.question}</h4>
            <h5>or...</h5>
          </div>

          <Link
            to={sortLinks()}
            className="q-button-link p-2 border d-grid gap-2 m-3 q-button-link"
          >
            {sortLinks().includes("question") != "" ? "Poll" : "Answer"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question;
