import React from 'react';
import './view.css';
import Header from '../components/header/header.js';
import Main from '../components/main/main.js';
import About from '../components/about/about.js';

function View() {
    return ( 
        <div className='container-view'>
            <div className='view-header'><Header /></div>
            <div className='view-main'><Main /></div>
            <div className='view-about'><About /></div>
        </div>
    )
}

export default View;