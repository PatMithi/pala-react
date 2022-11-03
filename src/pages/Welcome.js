import React from "react";
import {Link} from 'react-router-dom';

function Welcome () {
    return (
        <div>
            <div className="welcomeBsnner">
                <img src="/images/7.jpeg" alt="welcome"/>
                <div className="welcome-content">
                    <h2>Welcome to PALA Construction</h2>
                    <p>Our vision is to be Malawi's premier concrete brick & concrete block manufacturer, trusted and recognised for the best quality and best service.</p>
                    <button className="default-btn-gold ">
                        <Link to='/products' className="link-gold">View Products</Link>
                    </button>
                </div>
            </div>
            <div>
                <h1>Featured Products</h1>
            </div>
        </div>
    )
}

export default Welcome;