
import React from 'react';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import Button from '../ui/Button';
import FormInput from './FormInput';


const StepOneForm = ({ setShowNext }: {
    setShowNext: React.Dispatch<React.SetStateAction<{
        status: boolean;
        fields: { [props: string]: string; };
    }>>;
}) => {
    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }, {
        name: "required",
        username: "required|minLength:5",
        email: "required|email",
        password: "required|password",
        confirm_password: "required|confirm_password",
    });

    const nextForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            setShowNext((prev) => ({
                ...prev,
                status: true,
                fields: fields
            }));
        }
    };


    return (
        <form onSubmit={nextForm}>
           
            <div className="flex flex-col">
                <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-5">
                    <FormInput label="Name" className={errors?.name && "border-red-600 border-2"}
                        errors={errors?.name}
                        name="name" placeholder="Name" htmlFor="name" type="text" onChange={(e) => form.handleChangeEvent(e)} />


                    <FormInput label="Username" className={errors?.username && "border-red-600 border-2"} name="username"
                        errors={errors?.username}
                        placeholder="Username" htmlFor="username" type="text" onChange={(e) => form.handleChangeEvent(e)} />
                </div>


                <FormInput label="Email" className={errors?.email && "border-red-600 border-2"} name="email" placeholder="Email"
                    errors={errors?.email}
                    htmlFor="email" type="email" onChange={(e) => form.handleChangeEvent(e)} />


                <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-5">
                    <FormInput label="Password" className={errors?.password && "border-red-600 border-2"} name="password"
                        errors={errors?.password}
                        placeholder="Password" htmlFor="password" type="password" onChange={(e) => form.handleChangeEvent(e)} />

                    <FormInput label="Retype Password" className={errors?.confirm_password && "border-red-600 border-2"}
                        errors={errors?.confirm_password}
                        name="confirm_password" placeholder="Retype Password" htmlFor="retype_password" type="password" onChange={(e) => form.handleChangeEvent(e)} />
                </div>

                <Button name="Next" disabled={isvalidForm} className="ml-auto" />
            </div>
        </form>
    );
};

export default StepOneForm;