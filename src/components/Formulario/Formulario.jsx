import React, { useState } from 'react'
import MenuLink from "../MenuLink/MenuLink.jsx";
import Campo from "../Campo/Campo.jsx";
import SubmitButton from '../SubmitButton/SubmitButton.jsx';

const Formulario = ({ lightMode = false, typeForm = "Cadastro"  , ativo = true, nomeBtn = "Cadastrar", handleSubmit, cadastroData }) => {

    const [cadastro, setCadastro] = useState(cadastroData || {})

    const submit = (e) => {
        e.preventDefault()
        //console.log(cadastro)
        handleSubmit(cadastro)
    }

    function handleChange(e) {
        setCadastro({...cadastro, [e.target.name] : e.target.value})
        // console.info(cadastro)
    }

    return (
        <div className={lightMode === true ? "mx-auto flex min-h-screen w-full items-center justify-center bg-white text-black " : "mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white "}>
            <form onSubmit={submit} className="flex w-[30rem] flex-col space-y-10">
                <div className="text-center text-4xl font-medium">{typeForm}</div>

                <Campo
                    placeholder="Usuário"
                    typeForm={typeForm}
                    typeInput="text"
                    name="login"
                    obrigatorio
                    handleOnChange = {handleChange}
                    value={cadastro.login ? cadastro.login : ''}
                />
                {typeForm === 'Cadastro' ? 
                    <Campo
                    placeholder="Nome Completo"
                    typeForm={typeForm}
                    typeInput="text"
                    name="name"
                    obrigatorio
                    handleOnChange = {handleChange}
                    value={cadastro.name ? cadastro.name : ''}
                />
                :
                ''
            }
                

                <Campo
                    placeholder="Senha"
                    typeForm={typeForm}
                    typeInput="password"
                    name="senha"
                    obrigatorio
                    handleOnChange = {handleChange}
                    value={cadastro.senha ? cadastro.senha : ''}
                />

                <Campo
                    typeForm={typeForm}
                    typeInput="date"
                    name="date"
                    obrigatorio
                    handleOnChange = {handleChange}
                    value={cadastro.date ? cadastro.date : ''}
                />

                <SubmitButton nomeBtn={nomeBtn}/>

                <a
                    href="#"
                    className={ ativo ? "transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300" : "hidden"}
                >ESQUECEU SUA SENHA?
                </a>

                <p className={ ativo ? "text-center text-lg" : "hidden"}>
                    Não tem conta?
                   <MenuLink
                       classname={"font-medium text-indigo-500 underline-offset-4 hover:underline"}
                       to="/"
                       children="Crie sua Conta"
                   />

                </p>
            </form>
        </div>
    
    )
}
export default Formulario
