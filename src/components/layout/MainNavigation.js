import React from "react";
import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function MainNavigation () {
    return (
        <header>
            {/* <div className={classes.logo}>
                <Link to='/'>
                    <img src="/images/pala-logo.png" alt="pala-logo.png"/>
                </Link> 
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav> */}
            <Navbar>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>
                            <img src="/images/pala-logo.png" alt="pala-logo.png" className={classes.brand}/>
                        </Navbar.Brand>
                    </LinkContainer>
                </Container>

            </Navbar>
        </header>
    )
}

export default MainNavigation;