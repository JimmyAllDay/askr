import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';

import { userLoggedIn } from '../../features/users/loggedInSlice';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function SelectUser() {

    const [userName, setUserName] = useState('')

    const users = useSelector(state => state.users);

    const dispatch = useDispatch()

    const renderedUsers = users.map(user => (
        <option key={user.id} className="login-user" value={`${user.firstName} ${user.lastName}`}>
          {`${user.firstName} ${user.lastName}`}
        </option>
      ))

    const onUserChanged = e => setUserName(e.target.value)

    useEffect(() => console.log(userName), [userName]);

    const saveLoggedInUser = () => {
        if (userName) {
          dispatch(
            userLoggedIn({
              userName
            })
          )
    
          setUserName('')
        }
      }

    return (
        <div className='d-flex flex-column align-items-centerm justify-content-between'>
            <Row>
                <Col className='mb-4'>             
                    <select className='select-dropdown' onChange={(e)=> onUserChanged(e)}>
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