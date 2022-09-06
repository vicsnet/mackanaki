import React from 'react';

const FormInput = ({ label, placeholder, htmlFor, type, onChange, name, className }: IFormInput) => {
    return (
        <div className="w-full flex flex-col gap-2 mt-7">
            <label htmlFor={htmlFor} className="text-signupTextColor text-sm">{label}</label>
            <input id={htmlFor} type={type} name={name} className={`bg-transparent border border-signupTextColor rounded-md h-14 outline-none px-5 text-navTextDarkColor ${className}`} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};

export default FormInput;