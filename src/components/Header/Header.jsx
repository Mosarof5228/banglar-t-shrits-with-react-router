import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='text-center font-bold sticky top-2 bg-gray-100 py-3'>
            <Link to="/">Home</Link>
            <Link to="/review">review</Link>
            <Link to="/about">about</Link>
            <Link to="/contract">contract</Link>

        </nav>
    );
};

export default Header;