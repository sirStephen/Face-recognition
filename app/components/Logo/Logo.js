import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain1.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='mt0'>
            <Tilt 
                className="Tilt br2 shadow-2 ma3" 
                options={{ max : 55 }} 
                style={{ height: 100, width: 150 }} 
            >
                <div className="Tilt-inner">
                    <img src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;