import React from 'react';
import Vector from'../Img/Vector.png';

function Header ({onChange}) {

    return (
        <header className="header">
            <div className='header-content'>
                <div className="logo">
                    <img src={Vector} alt="logo"></img>
                    <span className="logo_title">Travel Portal</span>  
                </div>
                <nav className="navigation">
                    <span className="list_title mra">How It Works</span>
                    <span className="list_title mlra">Plan Your Trip</span>
                    <span className="list_title mlra">Destinations</span>
                    <span className="list_title mla">Travel Stories</span>
                </nav>
                <button className="login" onClick={() => onChange()}>Login</button>
            </div>    
        </header>
    );
}


export default Header;