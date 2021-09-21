import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"

import Nav from 'react-bootstrap/Nav'

function NavBar() {

    return(
        <>
            <Nav className="justify-content-end bg-light">
                <Nav.Item>
                    <Link to='/'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/'>Link 1</Link>  
                </Nav.Item>
                <Nav.Item>
                    <Link to='/'>Link 2</Link>  
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavBar