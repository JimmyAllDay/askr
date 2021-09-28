import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { questionAdded } from '../../features/questions/questionsSlice.js'

import Button from 'react-bootstrap/Button'

function NewQuestion() {
    const user = useSelector(state=>state.loggedInUser[0].user)
    const dispatch = useDispatch()

    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [placeholder, setPlaceHolder] = useState({
        a: `Start scattin' and beboppin' all over Costanza`,
        b:`Attend Rage-A-Holics`
    })

    const handleChangeOptionA = (e) => setOptionA(e.target.value)
    const handleChangeOptionB =(e) => setOptionB(e.target.value)

    const createNewQuestion = (loggedInUser) => {

        const date = new Date().toString()

        if (optionA !== '' && optionB !== '') {
            dispatch(
              questionAdded({
                id: nanoid(), 
                dateAsked: date,
                user: `${loggedInUser.firstName} ${loggedInUser.lastName}`, 
                avatar: loggedInUser.avatar, 
                questionOptionA: optionA, 
                questionOptionB: optionB, 
                answeredBy: null
              })
            )
      
            setOptionA('')
            setOptionB('')
            setPlaceHolder({
                a: `Question added!`,
                b:`Ask another question!`
                }
            )
          }
    }
    useEffect(()=>console.log(optionA, optionB))

    return (
        <div className="w-75 mt-2 d-flex flex-column">
            <div className="d-flex justify-content-center w-100">
                    <div className="w-100 border">
                        <h5>New Question</h5>
                    </div>
            </div>
            <div className="w-100 border p-2 bg-light d-flex flex-column">
                    <div className="border d-flex justify-content-start">
                        <h3 className="ms-4 my-auto p-2">Finish the question...</h3>
                    </div>

                    <div className="d-flex justify-content-start">
                        <div className="border">
                            <div className="question-avatar-container p-2">
                                <img 
                                    src={user.avatar} 
                                    alt="avatar" 
                                    className="question-avatar"
                                    >
                                </img>
                            </div>
                            <p>Hugh Mckenzie</p>
                        </div>
                        <div className="border w-100 d-flex flex-column">
                        <div className="border d-flex justify-content-center">
                        <h3 className="p-2">Would you rather?</h3>
                    </div>
                            <div className="border d-grid p-2 w-75 align-self-center me-2">
                               
                                <input 
                                    className={"notice"}
                                    placeholder={placeholder.a} 
                                    onChange={(e)=> handleChangeOptionA(e)}
                                    value={optionA}
                                />
                            </div>
                            <h4>or..</h4>
                            <div className="border d-grid p-2 w-75 align-self-center me-2">
                                <input 
                                    className={null}
                                    placeholder={placeholder.b}
                                    onChange={(e)=> handleChangeOptionB(e)}
                                    value={optionB}
                                />
                            </div>
                            <div className="p-3 border d-grid gap-2">
                                <Button 
                                    className="bt-lg"
                                    onClick={()=> createNewQuestion(user)}
                                    >Submit</Button>
                            </div>
                        </div>
                    </div>              
            </div>
        </div>
    )
}

export default NewQuestion