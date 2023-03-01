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
                        <NavDropdown.Item href="#action3">Paypal enables...</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Italian Parliam...</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Microstrategy Buys...</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Bitcoin miners’...</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Mango Markets...</NavDropdown.Item>
                        
                    </NavDropdown>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarDiv;
