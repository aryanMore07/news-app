import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.styles.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from '../../components/footer/Footer.component';
import { NavLink, Outlet } from 'react-router-dom';


const NavbarDiv = () => {
    return (
        <Fragment>
            <Navbar className='navbar-div'>
                <Container>
                    <Navbar.Brand><NavLink className='navbar-links' to='/'><i><b>moreNews</b></i></NavLink></Navbar.Brand>
                    <NavDropdown title="Quick News" id="navbarScrollingDropdown">
                        <ul className='navbar-ul-links'>
                            <li><NavLink className='navbar-links' to="news-one">Paypal enables...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news-two">Italian Parliam...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news-three">Microstrategy Buys...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news-four">Bitcoin miners’...</NavLink></li>
                            <li><NavLink className='navbar-links' to="news-five">Mango Markets...</NavLink></li>
                        </ul>                        
                    </NavDropdown>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default NavbarDiv;
