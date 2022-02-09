import React from 'react';
import './header.css';

function Header() {
    return ( 
        <div className='container-header'>
            <div className='container-logo'>
                <img alt='logo' src={require('./img/logo.png')}></img>
            </div>
            <div className='container-navbar'>
                <ul className='main-nav'>
                    <li className='main-nav-item'><a href='index.html'>Home</a></li>
                    <li className='main-nav-item'><a href='index.html'>About</a></li>
                    <li className='main-nav-item'><a href='index.html'>Projects</a></li>
                </ul>
            </div>
        </div>
    )
}

/*

*/

export default Header;