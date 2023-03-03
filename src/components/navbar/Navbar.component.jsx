import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.styles.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const NavbarDiv = () => {
    return (
        <Fragment>
            <Navbar className='navbar-div'>
                <Container>
                    <Navbar.Brand><NavLink className='navbar-links' to='/'><i><b>moreNews</b></i></NavLink></Navbar.Brand>
                    <NavDropdown title="Quick News" id="navbarScrollingDropdown">
                        <ul className='navbar-ul-links'>
                            <li><NavLink className='navbar-links' to="news/news-one">Paypal enables...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news/news-two">Italian Parliam...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news/news-three">Microstrategy Buys...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news/news-four">Bitcoin miners’...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news/news-five">Mango Markets...</NavLink></li>
                        </ul>                        
                    </NavDropdown>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarDiv;
