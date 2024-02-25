import React from 'react'
import Menu from "../../components/Menu/Menu.jsx";
import Formulario from "../../components/Formulario/Formulario.jsx";

const IncioCadastro = ({ LightMode }) => {
    return (
        <Formulario
            LightMode={LightMode}
            TypeForm="Cadastro"
            Ativo={false}
            NomeBtn="Cadastrar"
        />

    )
}
export default IncioCadastro
