import React from 'react'
import Formulario from "../../components/Formulario/Formulario.jsx";

const Login = ({ LightMode }) => {

    

    return (
        <Formulario
            lightMode={LightMode}
            typeForm = "Login"
            nomeBtn="Entrar"
        />

    )
}
export default Login
