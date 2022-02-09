import React from 'react';
import './main.css';

function Main() {
    return ( 
        <div className='container-main'>
            <div className='container-text'>
                <p className='text-title'>System Engineer</p>
                <p className='text-phrase'>Code with simple rules, and that complex and beautiful things are born from it.</p>
            </div>
            <div className='container-avatar'>
                <img alt='avatar' src={require('./img/avatar.png')}></img>
            </div>
        </div>
    )
}

/**
 * 
 */

export default Main;