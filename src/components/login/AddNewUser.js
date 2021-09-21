import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import Button from 'react-bootstrap/Button'

import { userAdded } from '../../features/users/usersSlice'



function AddNewUser() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useDispatch()

    const onFirstNameChanged = e => setFirstName(e.target.value)
    const onLastNameChanged = e => setLastName(e.target.value)

    // useEffect(() => console.log(lastName), [lastName]);

    const saveNewUser = () => {
        if (firstName && lastName) {
          dispatch(
            userAdded({
              id: nanoid(),
              firstName,
              lastName
            })
          )
    
          setFirstName('')
          setLastName('')
        }
      }

    return(
        <div className='new_user_modal'>
            <input type='text' placeholder='First name' onChange={(e) => onFirstNameChanged(e)}></input><br/><br/>
            <input type='text' placeholder='Last name' onChange={(e)=> onLastNameChanged(e)}></input>
            <br/>
            <br/>
            <Button onClick={()=> saveNewUser()}>Add User</Button>
        </div>
    )

}

export default AddNewUser