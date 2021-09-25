import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn } from '../features/users/loggedInSlice';

import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import avatar2 from '../assets/images/avatar2.png'

function NavBar() {

    const loggedInUser = useSelector(state => state.loggedInUser[0].userName)

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(
            userLoggedIn(null)
        )
    }

    return(
            <Nav className="bg-light navBar">
                <Col className='d-flex justify-content-center my-auto'>
                    <h5>Would you Rather?</h5>
                </Col>
                <Col className="d-flex">
                {loggedInUser 
                        ? <div className="w-100 d-flex justify-content-around"> 
                            <Nav.Item className="my-auto">
                                <Link to='/'>Home</Link>
                            </Nav.Item>
                                <Nav.Item className="my-auto">
                            <Link to='/'>New Question</Link>  
                            </Nav.Item>
                            <Nav.Item className="my-auto">
                                <Link to='/'>Leader Board</Link>  
                            </Nav.Item> 
                        </div>
                    : null}
                </Col>
                <Col className="d-flex">
                    {loggedInUser 
                        ? <div className="d-flex w-100 justify-content-end md-ms-5">
                            <div className="d-flex">
                                <div className="d-none d-lg-block my-auto">
                                    {`Welcome, ${loggedInUser.split(' ')[0]}`}
                                </div>
                                <div className='avatar-image-container my-auto d-none d-md-block ms-3 me-5'>
                                    <img
                                        className="nav-avatar" 
                                        src={avatar2}>
                                    </img>
                                </div>
                            </div>
                            <Button 
                                className="mx-3 h-75 my-auto"
                                onClick={()=>logOut()}>
                                Log Out
                            </Button>
                        </div> 
                        : null}
                </Col>
            </Nav>
    )
}

export default NavBar