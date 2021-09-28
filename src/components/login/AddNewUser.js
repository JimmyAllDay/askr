import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from '../../features/users/usersSlice'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddNewUser() {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onFirstNameChanged = e => setFirstName(e.target.value)
    const onLastNameChanged = e => setLastName(e.target.value)

    const saveNewUser = () => {
        if (firstName && lastName) {
          dispatch(
            userAdded({
              id: nanoid(),
              firstName,
              lastName
            })
          )
    
          setFirstName(null)
          setLastName(null)
        }
      }

    return(
        <div className='d-flex flex-column align-items-centerm justify-content-between'>
            <Row>
                <Col>
                    <input type='text' placeholder='First name' onChange={(e) => onFirstNameChanged(e)}></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type='text' placeholder='Last name' onChange={(e)=> onLastNameChanged(e)}></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='log-in-button' onClick={()=> saveNewUser()}>Add User</Button>
                </Col>
            </Row>
        </div>
    )

}

export default AddNewUser