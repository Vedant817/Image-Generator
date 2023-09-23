/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FormField = ({LableName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label className='block text-sm font-medium text-gray-900'>{LableName}</label>
                {isSurpriseMe && (<button type="button" onClick={handleSurpriseMe} className='font-semibold bg-[#ECECF1] py-1px-2 rounded-[5px] text-black'>Surprise Me</button>)}
            </div>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-ld focus: ring-[#4649ff] focus:border-[#4649ff] outline-none w-full p-3'></input>
        </div>
    )
}

export default FormField