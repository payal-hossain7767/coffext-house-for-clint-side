import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>navber</h1>
            <div className='flex gap-5'>
                <NavLink to='/addcoffee'>Add Coffee</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/coffee'>Coffee</NavLink>
            </div>
        </div>
    );
};

export default Header;