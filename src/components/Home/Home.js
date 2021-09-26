import React, {useState, useEffect} from 'react'
import Question from './Question'

import { useSelector } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../app/styles/home-styles.css'

function Home() {
    const [answeredQs, setAnsweredQs ] = useState(false)

    const questionsData = useSelector(state => state.questions)

    const answeredQuestions = questionsData.filter(question => question.answeredBy != null)
    const mappedAnswered = answeredQuestions.map((question)=> {
        return (
            <Question
                name={question.user}
                question={question.questionOptionA}
                answer={question.answeredBy}
            />
        )
    })

    const unAnsweredQuestions = questionsData.filter(question => question.answeredBy == null)
    const mappedUnanswered = unAnsweredQuestions.map((question)=> {
        return (
            <Question
                name={question.user}
                question={question.questionOptionA}
                answer={question.answeredBy}
            />
        )
    })
    
    return(
        <div className="w-75 mt-2">
                <Row className="d-flex justify-content-center w-100">
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
                </Row>
                <Row className="w-100 border p-2">
                        {answeredQs === true 
                            ?(<Col 
                                className="d-flex flex-column justify-content-center">
                                {mappedAnswered}
                            </Col>)
                            :(<Col 
                                className="d-flex flex-column justify-content-center" 
                                >
                                {mappedUnanswered}
                            </Col>)
                        }
                </Row>
        </div>
    )
}

export default Home