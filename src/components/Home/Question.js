import React from "react";

import { Link } from "react-router-dom";

function Question(props) {
  console.log(props);

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
    <div className="mt-2 card-border-background">
      <Link to={sortLinks()}>
        <div className="d-flex flex-row q-header">
          <div className="question-avatar-container">
            <img
              src={props.avatar}
              alt="avatar"
              className="question-avatar m-1"
            ></img>
          </div>
          <h5 className="ms-3 mt-2 q-card-text me-auto">{props.name} asks:</h5>
          {/* <p>Asked on: {props.date}</p> */}
        </div>
        <div>
          <h6 className="q-card-text my-auto align-self-center mb-1">
            Would you rather?
          </h6>
        </div>
        <div className="q-card-text d-flex flex-column">
          <h3 className="q-card-text">{props.question}</h3>
          <h6 className="q-card-text">or...</h6>
        </div>
      </Link>
    </div>
  );
}

export default Question;
