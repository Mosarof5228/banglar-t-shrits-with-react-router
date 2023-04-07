import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='text-center font-bold '>
            <Link to="/">Home</Link>
            <Link to="/review">review</Link>
            <Link to="/about">about</Link>
            <Link to="/contract">contract</Link>

        </nav>
    );
};

export default Header;