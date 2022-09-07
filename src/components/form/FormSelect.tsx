import React from 'react';

const FormSelect = ({ label, htmlFor, onChange, name, errors }: IFormSelect) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={htmlFor} className="text-signupTextColor md:text-sm text-xs">{label}</label>
            <select id={htmlFor} name={name} onChange={onChange} className="bg-bgDarkColor border border-gray-500 rounded-md md:text-sm text-xs h-14 outline-none px-5 text-navTextDarkColor">
                <option value="">Choose a category</option>
                <option value="contruction company">Construction Company</option>
            </select >
            {errors && <span className="text-red-600 md:text-sm text-xs">{errors}</span>}
        </div>
    );
};

export default FormSelect;