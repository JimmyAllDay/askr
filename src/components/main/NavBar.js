import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"

function NavBar({ children }) {
    const [show, toggleShow] = useState(false);

    return(
        <>
            <Nav className="justify-content-end bg-light">
                <Nav.Item>
                <Link to='/'>Home</Link>    {/* <Nav.Link></Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                <Link to='/'>Link 1</Link>    {/* <Nav.Link></Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                <Link to='/'>Link 2</Link>    {/* <Nav.Link></Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                    {/* {!show && <Button onClick={() => toggleShow(true)}>Login</Button>} */}
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavBar