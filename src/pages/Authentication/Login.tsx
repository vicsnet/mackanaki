import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';


import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';


const Login = () => {

    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        email: "",
        password: "",
    }, {
        email: "required|email",
        password: "required"
    });


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            console.log('Submitted');
            form.customToast({ type: "success", message: "Success!" });
            console.log(fields, errors);
            // Perform api call here
        }
    };

    return (
        <Fragment>
            <PageLayout>
                {/* LOGIN CONTAINER START */}
                <div className="flex justify-center items-center p-6">
                    <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor h-auto py-10 md:px-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to="/">
                                <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                            </Link>
                            <p className="text-signupTextColor mb-2 font-semibold text-md">Login</p>
                            <p className="mx-4 text-signupTextColor md:text-sm text-xs">Fill in your details below and continue login</p>
                        </div>

                        {/* FORM START */}
                        <div className="mx-8 md:w-[30rem]">
                            <form noValidate
                                autoComplete="off"
                                onSubmit={onSubmit}
                            >
                                <div className="flex flex-col">
                                    <FormInput label="Email"
                                        name="email"
                                        errors={errors?.email}
                                        placeholder="Email"
                                        className={errors?.email && "border-red-600 border-2"}
                                        htmlFor="email"
                                        onChange={(e) => form.handleChangeEvent(e)}
                                        type="email"
                                    />


                                    <FormInput label="Password" placeholder="Password"
                                        errors={errors?.password}
                                        name="password"
                                        onChange={(e) => form.handleChangeEvent(e)}
                                        className={errors?.password && "border-red-600 border-2"}
                                        htmlFor="password"
                                        type="password"
                                    />


                                    <div className="flex mt-7 flex-col justify-center items-center gap-2 mx-auto">
                                        <p className="mx-4 text-signupTextColor md:text-sm text-xs text-center">Don't have an account? <Link to="/verify-email">
                                            <span className="text-primaryColor underline">Create an account</span>
                                        </Link>
                                        </p>
                                        <Button name="Login" disabled={isvalidForm} className="mx-auto" />
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
