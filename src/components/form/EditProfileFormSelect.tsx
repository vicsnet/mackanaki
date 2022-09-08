import React from 'react';

const EditProfileFormSelect = ({ label, htmlFor, className, onChange, name, errors }: IFormSelect) => {
    return (
        <div className={"w-full flex items-center gap-7 mt-7 " + className}>
            <label htmlFor={htmlFor} className="lg:w-[140px] w-[120px] text-signupTextColor md:text-sm text-xs">{label}</label>
            <div className="flex flex-col w-full">
                <select id={htmlFor} name={name} onChange={onChange} className={`w-full bg-bgDarkColor border border-gray-500 rounded-md md:text-sm text-xs h-14 outline-none px-5 text-navTextDarkColor  ${errors && "border-red-600 border-2"}`}>
                    <option value="">Choose a {label}</option>
                    <option value="contruction company">Test</option>
                    <option value="contruction company">Test</option>
                    <option value="contruction company">Test</option>
                </select >
                {errors && <span className="text-red-600 md:text-sm text-xs mt-2">{errors}</span>}
            </div>
        </div>
    );
};

export default EditProfileFormSelect;