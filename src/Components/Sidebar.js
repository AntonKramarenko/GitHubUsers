import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const sidebar = {
        height: '100vh',
        background: '#0d6efd',
        overflov: 'hiden',
        position: 'fixed'
    }

    const ColorText = {
        color: '#fff'
    }


    return (
        <nav class="nav flex-column " style={sidebar}>
            <div class="navbar-brand text-center pt-4 mb-2">Github search</div>
            <hr />
            <li className="nav-item">
                <NavLink exact="true" to='/' className='nav-link' style={ColorText}>Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='selectedUsers' className='nav-link' style={ColorText}  >SelectedUsers </NavLink>
            </li>

        </nav>
    )
}