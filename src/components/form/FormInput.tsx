import React from 'react';

const FormInput = ({ label, placeholder, htmlFor, type, onChange, name, className, errors }: IFormInput) => {
    return (
        <div className="w-full flex flex-col gap-2 mt-7">
            <label htmlFor={htmlFor} className="text-signupTextColor md:text-sm text-xs">{label}</label>
            <input id={htmlFor} type={type} name={name} className={`bg-transparent border border-gray-500 rounded-md h-14 outline-none px-5 text-navTextDarkColor md:text-sm text-xs ${className}`} onChange={onChange} placeholder={placeholder} />
            {errors && <span className="text-red-600 md:text-sm text-xs">{errors}</span>}
        </div>
    );
};

export default FormInput;