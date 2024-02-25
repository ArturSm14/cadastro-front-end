import React from 'react'
import MenuLink from "../MenuLink/MenuLink.jsx";

const Formulario = ({ TypeForm, Ativo = true, NomeBtn }) => {
    return (
        <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
            <section className="flex w-[30rem] flex-col space-y-10">
                <div className="text-center text-4xl font-medium">{TypeForm}</div>

                <div
                    className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                >
                    <input
                        type="text"
                        placeholder="Email ou Username"
                        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                </div>

                <div
                    className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                >
                    <input
                        type="password"
                        placeholder="Senha"
                        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                </div>
                <div
                    className={TypeForm === 'Cadastro' ?'w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500' : 'hidden'}
                >
                    <input
                        type="date"
                        className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none'
                    />
                </div>

                <button
                    className="transform rounded-b-3xl bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                >
                    {NomeBtn}
                </button>

                <a
                    href="#"
                    className={Ativo ? "transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300" : "hidden"}
                >ESQUECEU SUA SENHA?</a
                >

                <p className={ Ativo ? "text-center text-lg" : "hidden"}>
                    Não tem conta?
                   <MenuLink
                       classname={"font-medium text-indigo-500 underline-offset-4 hover:underline"}
                       to="/"
                       children="Crie sua Conta"
                   />

                </p>
            </section>
        </div>
    )
}
export default Formulario
