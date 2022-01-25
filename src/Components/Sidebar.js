import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = (props) => {
    const sidebar = {
        height: '100vh',
        width: '250px',
        background: '#0d6efd',
        overflow: 'hidden',
    }

    const ColorText = {
        color: '#fff'
    }

    return (
        <nav className="nav flex-column " style={sidebar}>
            <div className="navbar-brand text-center pt-4 mb-2">Github search</div>
            <hr />
            {props.navLinks.map(link => (
                <li className="nav-item" key={link.id}>
                    <NavLink exact={link.exact} to={link.to} className='nav-link' style={ColorText}>{link.title}</NavLink>
                </li>
            ))}
        </nav>
    )
}