import React from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function SelectUser() {
    const users = useSelector(state => state.users);

    const renderedUsers = users.map(user => (
        <option key={user.id} className="login-user" value={`${user.firstName} ${user.lastName}`}>
          {`${user.firstName} ${user.lastName}`}
        </option>
      ))

    return (
        <div>
        <Col>
            <Row>
                <Col></Col>
                <Col className='mt-5'>                 
                    <select>
                        { renderedUsers }
                        <option value={'add_new_user'} disabled={true}>Add New User</option>
                    </select>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className='mt-5'>                 
                    <Button>Log In</Button> 
                </Col>
                <Col></Col>    
            </Row>
        </Col>
        </div>
    )
}

export default SelectUser