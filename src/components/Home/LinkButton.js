import React from "react";

function LinkButton(props) {
  return (
    <div className="border border-primary">
      {props.answer ? "Poll" : "Answer"}
    </div>
  );
}

export default LinkButton;
