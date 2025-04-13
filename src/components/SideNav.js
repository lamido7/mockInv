import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const navStyle = {
        width: '200px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px 0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    };

    const linkStyle = {
        display: 'block',
        color: 'white',
        padding: '12px 20px',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'all 0.3s ease'
    };

    const hoverStyle = {
        backgroundColor: '#34495e',
        transform: 'translateX(5px)'
    };

    return (
        <nav style={navStyle}>
            <h3 style={{padding: '0 20px 20px', margin: 0}}>Furniture Manager</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li>
                    <Link 
                        to="/" 
                        style={linkStyle}
                        activeStyle={hoverStyle}
                    >
                       Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/houses" 
                        style={linkStyle}
                        activeStyle={hoverStyle}
                    >
                       Houses
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/furniture" 
                        style={linkStyle}
                        activeStyle={hoverStyle}
                    >
                       Furnitures
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
