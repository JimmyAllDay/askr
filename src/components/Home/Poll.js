import React from "react";

// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function Poll(props) {
  const { id } = useParams();
  const data = props.props.filter((question) => question.key === id)[0];
  console.log(data);
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
                  <h3 className="p-2 ms-5 mt-4">Would you rather?</h3>
                </div>
                <div className="p-3 border d-grid gap-2">
                  First answer goes here
                </div>
                <div className="p-3 border d-grid gap-2">
                  Second answer goes here
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
