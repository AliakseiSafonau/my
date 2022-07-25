import React from 'react';
import Vector from'../Img/Vector.png';

function Header ({onChange}) {

    return (
        <header className="header">
            <div className="logo">
                <img src={Vector} alt="logo"></img>
                <span className="logo_title">Travel Portal</span>  
            </div>
            <nav className="navigation">
                <span className="list_title mr0">How It Works</span>
                <span className="list_title">Plan Your Trip</span>
                <span className="list_title">Destinations</span>
                <span className="list_title">Travel Stories</span>
            </nav>
            <button className="login" onClick={() => onChange()}>Login</button>
        </header>
    );
}


export default Header;