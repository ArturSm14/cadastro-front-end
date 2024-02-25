import React from 'react'
import {NavLink} from "react-router-dom";

const MenuLink = ({ classname, children, to }) => {
    return (
        <NavLink className={classname} to={to}>
            {children}
        </NavLink>




    )
}
export default MenuLink
