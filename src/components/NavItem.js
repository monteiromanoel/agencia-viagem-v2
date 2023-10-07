import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href={props.link} className={`nav-link ${props.active ? 'active' : ''}`}>
                <i className={props.icon} /> {props.label}
            </a>
        </li>
    )
}

export default NavItem
