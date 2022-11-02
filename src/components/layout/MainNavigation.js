import React from "react";
import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';

function MainNavigation () {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> PALA</div>
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
            </nav>
        </header>
    )
}

export default MainNavigation;