import React from 'react';

const Button = ({ name, className, disabled }: { name: string; className?: string; disabled?: boolean; }) => {
    return (
        <button disabled={disabled} className={`mt-7 cursor-pointer text-[14px] text-white ${disabled ? "bg-sky-700" : "bg-primaryColor"} px-10 py-[10px] hover:bg-sky-700 ${className}`}>{name}</button>
    );
};

export default Button;