import React from 'react';

const FormSelect = ({ label, htmlFor, className, onChange, name, errors, categories, countries, states, status }: IFormSelect) => {

    const category = (
        status === "loading" ? <option value="">loading...</option> :
            categories?.map((category, id) => (
                <option key={id} value={category.id}>{category.name}</option>

            ))
    );
    const country = (
        status === "loading" ? <option value="">loading...</option> :
            countries?.map((country, id) => (
                <option key={id} value={country.id}>{country.name}</option>

            ))
    );

    const countrystate = (
        status === "loading" ? <option value="">loading...</option> :
            states?.map((state, id) => (
                <option key={id} value={state.id}>{state.name}</option>

            ))
    );

    return (
        <div className={`w-full flex flex-col gap-2 mt-7`}>
            <label htmlFor={htmlFor} className="text-signupTextColor md:text-sm text-xs">{label}</label>
            <select id={htmlFor} name={name} onChange={onChange} className="w-[inherit] bg-bgDarkColor border border-gray-500 rounded-md md:text-sm text-xs h-14 outline-none px-5 text-navTextDarkColor">
                <option value="">Choose a {name}</option> 
                {name === 'category' ? category : name === 'country' ? country : name === 'state' ? countrystate : 'no option to display'}

            </select >
            {errors && <span className="text-red-600 md:text-sm text-xs">{errors}</span>}
        </div>
    );
};

export default FormSelect;