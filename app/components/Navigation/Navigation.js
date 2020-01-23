import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isLoggedin }) => {
    if (isLoggedin) {
        return(
            <nav className='pa3 pointer'>
                <button
                    onClick={() => onRouteChange('login')}
                    className='pointer pa3 btn-black grow'
                >
                    Logout
                </button>
            </nav>    
        )
    } else {
        return(
            <nav className='pa3 pointer'>
                <button
                    onClick={() => onRouteChange('login')}
                    className='pointer pa3 btn-black grow m1'
                >
                    Login
                </button>
                <button
                    onClick={() => onRouteChange('register')}
                    className='pointer pa3 btn-black grow m1'
                >
                    Register
                </button>
            </nav>
        )
    }
    
}

export default Navigation;