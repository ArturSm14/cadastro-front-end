import React from 'react'
import Menu from "../../components/Menu/Menu.jsx";
import Formulario from "../../components/Formulario/Formulario.jsx";

const IncioCadastro = () => {
    return (
        <Formulario
            TypeForm="Cadastro"
            Ativo={false}
            NomeBtn="Cadastrar"
        />

    )
}
export default IncioCadastro
