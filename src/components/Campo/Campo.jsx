import React from 'react'

const Campo = ({ TypeForm, TypeInput,  placeholder}) => {
    return (
        <div
            className={TypeForm === 'Login' && TypeInput === "date" ? 'hidden': 'w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500'}
        >
            <input
                type={TypeInput}
                className='w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none'
                placeholder={TypeInput === 'date' ? "" : placeholder}
            />
        </div>
    )
}
export default Campo
