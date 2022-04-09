import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/review'>Review</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;