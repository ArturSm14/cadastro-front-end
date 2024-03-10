import React from 'react'

const SubmitButton = ({ type = 'submit', nomeBtn }) => {
  return (
            <button
                type= {type}
                className="transform rounded-b-3xl bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
            >
                {nomeBtn}
            </button>
  )
}

export default SubmitButton