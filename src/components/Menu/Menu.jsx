import React from 'react'
import MenuLink from "../MenuLink/MenuLink.jsx";

const Menu = () => {
    return (
        <header className="bg-gray-900 text-white">
            <nav className="flex items-center justify-center w-full gap-5">
                <MenuLink to="/" children="Cadastro"/>
                <MenuLink to="/Login" children="Login"/>
                <MenuLink to="/Usuarios" children="Usuarios"/>
            </nav>
        </header>
    )
}
export default Menu
