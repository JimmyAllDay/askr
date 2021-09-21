import React, {useState} from 'react'
import AddNewUser from './AddNewUser';
import SelectUser from './SelectUser';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import logo from '../../assets/images/logo.svg';
import './login-styles.css'


export function LoginModal() {

    const [show, toggleShow] = useState(true);
    
    const add_new_user = () => toggleShow(!show)

    return(
        <div className='LoginModal'>
            <Col className=''>
                <Row>
                    <h1>Would You Rather?</h1>
                </Row>
                <Row>
                    <img src={logo} className="App-logo" alt="logo" />
                </Row>
                <Row>
                    <h2>Select or add a user to log in</h2>
                </Row>
                <Row>
                   <Col></Col>
                    <Col className='d-flex justify-content-start'>
                        <button 
                            className='login-select-btn' 
                            onClick={()=> add_new_user()}>
                                {!show ? 'Select User' : 'Add User'}
                        </button>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row className='add-select-user'>
                    { !show 
                        ? <AddNewUser/> 
                        : <SelectUser />
                    }
                </Row>
            </Col>
        </div>
    )
}


export default LoginModal