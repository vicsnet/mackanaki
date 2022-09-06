
import React from 'react';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import Button from '../ui/Button';
import FormInput from './FormInput';


const StepOneForm = ({ setShowNext }: { setShowNext: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }, {
        name: "required",
        username: "required",
        email: "required|email",
        password: "required|password",
        confirm_password: "required|confirm_password",
    });

    // console.log(fields);
    console.log(errors);
    const nextForm = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const isValid = form.isFormValid;
        if (isValid) {
            setShowNext(true);
            // console.log('Submitted');
            console.log(fields, errors);
            form.customToast({ type: "success", message: "Success!" });
            // Perform api call here
        }
    };

    return (
        <form onSubmit={nextForm}>
            <div className="flex flex-col">
                <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-5">
                    <FormInput label="Name" className={errors?.name && "border-red-600 border-2"} name="name" placeholder="Name" htmlFor="name" type="text" onChange={(e) => form.handleChangeEvent(e)} />
                    {errors?.name && <span className="text-red-600 text-sm mt-3">{errors?.name}</span>}

                    <FormInput label="Username" className={errors?.username && "border-red-600 border-2"} name="username" placeholder="Username" htmlFor="username" type="text" onChange={(e) => form.handleChangeEvent(e)} />
                    {errors?.username && <span className="text-red-600 text-sm mt-3">{errors?.username}</span>}
                </div>


                <FormInput label="Email" className={errors?.email && "border-red-600 border-2"} name="email" placeholder="Email" htmlFor="email" type="email" onChange={(e) => form.handleChangeEvent(e)} />
                {errors?.email && <span className="text-red-600 text-sm mt-3">{errors?.email}</span>}


                <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-5">
                    <FormInput label="Password" className={errors?.password && "border-red-600 border-2"} name="password" placeholder="Password" htmlFor="password" type="password" onChange={(e) => form.handleChangeEvent(e)} />
                    {errors?.password && <span className="text-red-600 text-sm mt-3">{errors?.password}</span>}

                    <FormInput label="Retype Password" className={errors?.confirm_password && "border-red-600 border-2"} name="confirm_password" placeholder="Retype Password" htmlFor="retype_password" type="password" onChange={(e) => form.handleChangeEvent(e)} />
                    {errors?.confirm_password && <span className="text-red-600 text-sm mt-3">{errors?.confirm_password}</span>}
                </div>

                <Button name="Next" disabled={isvalidForm} className="ml-auto" />
            </div>
        </form>
    );
};

export default StepOneForm;