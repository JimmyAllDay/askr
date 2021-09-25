import React, {useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn } from '../../features/users/loggedInSlice';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function SelectUser() {

    const [userName, setUserName] = useState(null)

    const users = useSelector(state => state.users);

    const dispatch = useDispatch()

    const renderedUsers = users.map(user => (
        <option 
          key={user.id} 
          className="login-user" 
          value={`${user.firstName} ${user.lastName}`}>
            {`${user.firstName} ${user.lastName}`}
        </option>
      ))

    const onUserChanged = e => setUserName(e.target.value)

    const saveLoggedInUser = () => {
        if (userName ) {
          dispatch(
            userLoggedIn({
              userName
            })
          )
    
          setUserName('')
        }
      }

    return (
        <div className='d-flex flex-column align-items-center justify-content-between'>
            <Row>
                <Col className='mb-4'>             
                    <select 
                      defaultValue="default"
                      className='select-dropdown' 
                      onChange={(e)=> onUserChanged(e)}>
                        <option value="default" disabled>
                          Select User
                        </option>
                        { renderedUsers }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button 
                        className='log-in-button' 
                        onClick={()=> saveLoggedInUser()}>
                        Log In
                    </Button> 
                </Col>
            </Row>
        </div>
    )
}

export default SelectUser