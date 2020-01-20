import React, { Component } from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    render () {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand >MoD</Navbar.Brand>
                    </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to="ask">
                        <Nav.Link href="ask">Ask ?</Nav.Link>
                    </Link>
                    </Nav>
                    <Button variant="dark">LogOut</Button>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header