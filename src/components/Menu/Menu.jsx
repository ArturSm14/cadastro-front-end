import MenuLink from "../MenuLink/MenuLink.jsx";

const Menu = () => {



    return (
        <header>
            <nav className="flex items-center justify-center w-full gap-5">
                <MenuLink to="/" children="Cadastro"/>
                <MenuLink to="/Login" children="Login"/>
                <MenuLink to="/Usuarios" children="Usuarios"/>
            </nav>

        </header>
    )
}
export default Menu
