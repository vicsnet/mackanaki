import React from 'react';

const Button = ({ name, className, disabled, children, onClick }: { name: string; className?: string; disabled?: boolean; children?: React.ReactNode; onClick?: React.MouseEventHandler<HTMLButtonElement>; }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`mt-7 cursor-pointer md:text-[14px] text-[12px] text-white ${disabled ? "bg-sky-700" : "bg-primaryColor"} md:px-10 md:py-[10px] px-5 py-[7px] hover:bg-sky-700 ${className}`}>
            <div className="flex items-center gap-3">
                {children} {name}

            </div>

        </button>
    );
};

export default Button;