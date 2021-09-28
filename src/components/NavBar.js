import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { userLoggedOut } from '../features/users/loggedInSlice';

import { Link } from "react-router-dom"

import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function NavBar() {

    const loggedInUser = useSelector(state => state.loggedInUser)
    
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(
            userLoggedOut()
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
                            <Link to='/new question'>New Question</Link>  
                            </Nav.Item>
                            <Nav.Item className="my-auto">
                                <Link to='/leaderboard'>Leader Board</Link>  
                            </Nav.Item> 
                        </div>
                    : null}
                </Col>
                <Col className="d-flex">
                    {loggedInUser &&
                         (<div className="d-flex w-100 justify-content-end md-ms-5">
                            <div className="d-flex">
                                <div className="d-none d-lg-block my-auto">
                                    {loggedInUser[0] && (`Welcome, ${loggedInUser[0].user.firstName}`)}
                                </div>
                                <div className='avatar-image-container my-auto d-none d-md-block ms-3 me-5'>
                                    <img
                                        className="nav-avatar" 
                                        src={loggedInUser[0].user.avatar}
                                        alt="avatar">
                                    </img>
                                </div>
                            </div>
                            <Button 
                                className="mx-3 h-75 my-auto"
                                onClick={()=>logOut()}>
                                Log Out
                            </Button>
                        </div>) }
                </Col>
            </Nav>
    )
}

export default NavBar