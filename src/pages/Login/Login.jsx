import React from 'react'
import Formulario from "../../components/Formulario/Formulario.jsx";

const Login = ({ LightMode }) => {
    return (
        <Formulario
            LightMode={LightMode}
            TypeForm = "Login"
            NomeBtn="Login"
        />

    )
}
export default Login
