import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (



    <nav className="navbar navbar-dark bg-primary navbar-expand-lg px-4">
        <div className="navbar-brand">
            Github Поиск
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact="true" to='/' className='nav-link'>Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='selectedUsers' className='nav-link'>SelectedUsers </NavLink>
            </li>
        </ul>
    </nav>
)