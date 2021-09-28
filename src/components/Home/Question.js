import React from 'react'

import Button from 'react-bootstrap/Button'


function Question(props) {

    return(
        <div className="w-100 border mb-2">
            <div className="border d-flex justify-content-start">
                <h3 className="ms-4 my-auto p-2">{props.name} asks:</h3>
            </div>
            <div className="d-flex justify-content-start">
                <div className="border">
                    <div className="question-avatar-container p-2">
                        <img 
                            src={props.avatar}
                            alt="avatar" 
                            className="question-avatar"
                            >
                        </img>
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
                    <div className="p-3 border d-grid gap-2">
                        <Button className="bt-lg">{props.answer ? "View Poll" : "Answer"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question