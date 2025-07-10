import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ title }) {
    return (
        <header>
            <h1>Benjamin Pritchard, {title}</h1>
            <nav className='navbar' >
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;