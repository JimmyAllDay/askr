import React, {useState, useEffect} from 'react'

import { useSelector } from 'react-redux'

import Col from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import '../../app/styles/home-styles.css'

function Home() {
    const [answeredQs, setAnsweredQs ] = useState(false)

    const questionsData = useSelector(state => state.questions)
    useEffect(()=> console.log(questionsData))

    return(
        <Col className="flex justify-content-center w-75 mt-2">
            <Row className="w-100 d-flex justify-content-center">
                <Col className="d-flex w-100">
                    <div 
                        className="w-50 border home-button"
                        onClick={() => setAnsweredQs(true)}
                        >
                        Answered Questions
                    </div>
                    <div 
                        className="w-50 border home-button"
                        onClick={() => setAnsweredQs(false)}
                        >
                        Unanswered Questions
                    </div>
                </Col>
            </Row>
            <Row className="">
                {answeredQs === true 
                    ?(<Col className="border border-dark">
                            <h1>This is the answered questions page</h1>
                    </Col>)
                    :(<Col 
                        className="border border-dark" 
                        >
                        <h1>This is the UNANSWERED questions page</h1>
                    </Col>)
                }
            </Row>
        </Col>
    )
}

export default Home