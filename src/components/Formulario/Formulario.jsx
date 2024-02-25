import React from 'react'
import MenuLink from "../MenuLink/MenuLink.jsx";
import Campo from "../Campo/Campo.jsx";

const Formulario = ({ LightMode = false, TypeForm, Ativo = true, NomeBtn }) => {
    return (
        <div className={LightMode === true ? "mx-auto flex min-h-screen w-full items-center justify-center bg-white text-black " : "mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white "}>
            <section className="flex w-[30rem] flex-col space-y-10">
                <div className="text-center text-4xl font-medium">{TypeForm}</div>

                <Campo
                    placeholder="Email ou Usuário"
                    TypeForm={TypeForm}
                    TypeInput="email"
                />

                <Campo
                    placeholder="Senha"
                    TypeForm={TypeForm}
                    TypeInput="password"
                />

                <Campo
                    TypeForm={TypeForm}
                    TypeInput="date"
                />

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
