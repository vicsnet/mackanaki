import React from 'react';

const EditProfileFormInput = ({ label, placeholder, htmlFor, type, onChange, name, className, errors }: IFormInput) => {
    return (
        <div className="flex items-center gap-5 mt-7">
            <label htmlFor={htmlFor} className="w-[130px] text-signupTextColor md:text-sm text-xs">{label}</label>
            <div className="flex flex-col w-full">
                <input id={htmlFor} type={type} name={name} className={`w-full bg-transparent border border-gray-500 rounded-md md:h-12 h-10 outline-none px-5 text-navTextDarkColor md:text-sm text-xs ${className}`} onChange={onChange} placeholder={placeholder} />
                {errors && <span className="text-red-600 md:text-sm text-xs mt-2">{errors}</span>}
            </div>
        </div>
    );
};


export default EditProfileFormInput;