import React from 'react'
import {NavLink} from "react-router-dom";

const MenuLink = ({ classname, children, to }) => {
    return (
        <NavLink className={children === 'Crie sua Conta' ? classname : 'transform rounded-b-2xl p-2 bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400'} to={to}>
            {children}
        </NavLink>




    )
}
export default MenuLink
