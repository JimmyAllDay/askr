import React, {useState} from 'react'
import Question from './Question'

import { useSelector } from 'react-redux'

import '../../app/styles/home-styles.css'

function Home() {
    const [answeredQs, setAnsweredQs ] = useState(false)

    const questionsData = useSelector(state => state.questions)

    const answeredQuestions = questionsData.filter(question => question.answeredBy != null)
    const mappedAnswered = answeredQuestions.map((question)=> {
        return (
            <Question
                key={question.id}
                name={question.user}
                question={question.questionOptionA}
                answer={question.answeredBy}
                avatar={question.avatar}
            />
        )
    })

    const unAnsweredQuestions = questionsData.filter(question => question.answeredBy == null)
    const mappedUnanswered = unAnsweredQuestions.map((question)=> {
        return (
            <Question
                key={question.id}
                name={question.user}
                question={question.questionOptionA}
                answer={question.answeredBy}
                avatar={question.avatar}
            />
        )
    })
    
    return(
        <div className="w-75 mt-2">
                <div className="d-flex justify-content-center w-100">
                        <div 
                            className="w-50 border home-button"
                            onClick={() => setAnsweredQs(true)}
                            >
                            <h5>Answered Questions</h5>
                        </div>
                        <div 
                            className="w-50 border home-button"
                            onClick={() => setAnsweredQs(false)}
                            >
                            <h5>Unanswered Questions</h5>
                        </div>    
                </div>
                <div className="w-100 border p-2">           
                    <div 
                        className="d-flex flex-column justify-content-center">
                            {answeredQs === true ? mappedAnswered : mappedUnanswered}
                    </div>
                </div>
        </div>
    )
}

export default Home