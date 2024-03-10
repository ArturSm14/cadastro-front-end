import React from 'react'
import {useNavigate} from 'react-router-dom'

import Formulario from "../../components/Formulario/Formulario.jsx";

const IncioCadastro = ({ lightMode }) => {

    const navigate = useNavigate()

    function createPost(cadastro) {
        //initialize cost and services
        cadastro.cost = 0
        cadastro.services = []

        fetch("http://localhost:5000/usuarios", {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(cadastro)
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            // redirect
            navigate('/', { state: {message: 'Usuario criado com sucesso!'}})
        })
        .catch(err => console.log(err))
    }
    

    return (
        <Formulario
            lightMode={lightMode}
            typeForm="Cadastro"
            ativo={false}
            nomeBtn="Cadastrar"
            handleSubmit={createPost}
        />

    )
}
export default IncioCadastro
