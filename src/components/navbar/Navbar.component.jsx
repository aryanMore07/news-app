import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.styles.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarDiv = () => {
    return (
        <Fragment>
            <Navbar className='navbar-div'>
                <Container>
                    <Navbar.Brand href="/"><i><b>moreNews</b></i></Navbar.Brand>
                    <NavDropdown title="Quick News" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarDiv;
