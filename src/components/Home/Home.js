import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Home() {
    const [questionsView, setQuestionsView ] = useState("answered")

    const greyOut = () => (questionsView === "answered") ? {backgroundColor: "lightgrey"} : {backgroundColor: "none"}

    return(
        <Container className="border flex justify-content-center border">
            <Row className="border">
                <Col className="d-flex w-75">
                    <div className="w-50 border">
                    Answered Questions
                    </div>
                    <div className="w-50 border"
                    style={greyOut()}>
                            Unanswered Questions
                    </div>
                </Col>
            </Row>
            <Row className="">
                {questionsView === 'answered' 
                    ?(<Col className="">
                            <h1>This is the answered questions page</h1>
                    </Col>)
                    :(<Col 
                        className="" 
                        >
                        <h1>This is the UNANSWERED questions page</h1>
                    </Col>)
                }
            </Row>
        </Container>
    )
}

export default Home