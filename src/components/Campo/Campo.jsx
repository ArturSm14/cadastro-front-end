import React from 'react'

const Campo = ({ typeForm, typeInput,  placeholder, obrigatorio = false, name = "name", handleOnChange, value }) => {
    return (
        <div
            className={typeForm === 'Login' && typeInput === "date" ? 'hidden': 'w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'}
        >
            <input
                type={typeInput}
                className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none'
                placeholder={typeInput === 'date' ? "" : placeholder}
                required={obrigatorio}
                name={name}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}
export default Campo
