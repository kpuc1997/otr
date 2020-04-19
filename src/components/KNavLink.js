import React from 'react';
import { NavLink } from "react-router-dom";


const KNavLink = (props) => (
    <NavLink exact strict
        className="text-decoration-none nav-link" 
        activeClassName="active" 
        to={props.page.url}>

        {props.page.name}

    </NavLink>
)

export default KNavLink;