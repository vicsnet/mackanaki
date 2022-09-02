import React from 'react';

const FormSelect = ({ label, htmlFor }: IFormSelect) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={htmlFor} className="text-signupTextColor text-sm">{label}</label>
            <select id={htmlFor} className="bg-bgDarkColor border border-signupTextColor rounded-md h-14 outline-none px-5 text-navTextDarkColor">
                <option value="">Choose a category</option>
                <option value="contruction company">Construction Company</option>
            </select >
        </div>
    );
};

export default FormSelect;