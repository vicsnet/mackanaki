import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import { toast } from 'react-toastify';
// import { useFormInputValidation } from "react-form-input-validation";


import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';



const Login = () => {

    const [fields, errors, form] = useFormInputValidation({
        email: "",
        password: "",
    }, {
        email: "required",
        password: "required|maxLength:6"
    });


    // if (form.isFormValid) {
    //     console.log(fields, errors);

    // } else {
    //     console.log(errors);
    // }


    // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     const isValid = await form.validate(event);
    //     if (isValid) {
    //         console.log(fields, errors);
    //         // Perform api call here
    //     }
    // };
    // const [changeTestValue, setChangeTestValue] = useState('');

    return (
        <Fragment>
            <PageLayout>
                {/* LOGIN CONTAINER START */}
                <div className="flex justify-center items-center p-6">
                    <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor h-auto py-10 px-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to="/">
                                <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                            </Link>
                            <p className="text-signupTextColor font-semibold text-md">Login</p>
                            <p className="mx-4 text-signupTextColor text-sm">Fill in your details below and continue login</p>
                        </div>

                        {/* FORM START */}
                        <div className="mx-8 mt-7 md:w-[30rem]">
                            <form noValidate
                                autoComplete="off"
                                onSubmit={form.onSubmit}
                            >
                                <div className="flex flex-col gap-7 ">

                                    <FormInput label="Email"
                                        name="email"
                                        placeholder="Email"
                                        className=""
                                        htmlFor="email"
                                        onChange={(e) => form.handleChangeEvent(e)}
                                        type="email" />


                                    <FormInput label="Password" placeholder="Password"
                                        name="password"
                                        onChange={(e) => form.handleChangeEvent(e)}
                                        htmlFor="password" type="password" />
                                    <div className="flex mt-4 flex-col justify-center items-center gap-2 mx-auto">
                                        <p className="mx-4 text-signupTextColor text-sm text-center">Don't have an account? <Link to="/verify-email">
                                            <span className="text-primaryColor underline">Create an account</span>
                                        </Link></p>

                                        <Button name="Login" disabled={!form.isFormValid} className="mx-auto" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* FORM END */}
                    </div>
                </div>
                {/* LOGIN CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default Login;
