
import React from 'react';
import FormInput from './FormInput';


const StepOneForm = ({ nextForm }: { nextForm: Function; }) => {
    return (
        <form onSubmit={(e) => nextForm(e)}>
            <div className="flex flex-col gap-7">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Name" placeholder="Name" htmlFor="name" type="text" />
                    <FormInput label="Username" placeholder="Username" htmlFor="username" type="text" />
                </div>

                <div className="w-full">
                    <FormInput label="Email" placeholder="Email" htmlFor="email" type="email" />
                </div>

                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Password" placeholder="Password" htmlFor="password" type="password" />
                    <FormInput label="Retype Password" placeholder="Retype Password" htmlFor="retype_password" type="password" />
                </div>
                <button className='ml-auto mt-7 cursor-pointer text-[14px] text-white bg-primaryColor px-10 py-[10px]  hover:bg-sky-700 w-28'>Next</button>
            </div>
        </form>
    );
};

export default StepOneForm;