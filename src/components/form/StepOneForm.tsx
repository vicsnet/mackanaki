
import React from 'react';
import Button from '../ui/Button';
import FormInput from './FormInput';


const StepOneForm = ({ nextForm }: { nextForm: Function; }) => {
    return (
        <form onSubmit={(e) => nextForm(e)}>
            <div className="flex flex-col gap-7">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Name" name="name" placeholder="Name" htmlFor="name" type="text" />
                    <FormInput label="Username" name="username" placeholder="Username" htmlFor="username" type="text" />
                </div>


                <FormInput label="Email" name="email" placeholder="Email" htmlFor="email" type="email" />


                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Password" name="password" placeholder="Password" htmlFor="password" type="password" />
                    <FormInput label="Retype Password" name="confirm_password" placeholder="Retype Password" htmlFor="retype_password" type="password" />
                </div>

                <Button name="Next" className="ml-auto" />
            </div>
        </form>
    );
};

export default StepOneForm;