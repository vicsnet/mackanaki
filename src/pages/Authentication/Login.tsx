import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import { toast } from 'react-toastify';
import { Lang, useFormInputValidation } from "react-form-input-validation";


import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';



const Login = () => {

   
    const [formValue, setFormValue] = useState<ILoginForm>({
        email: '',
        password: '',
    });
    const [error, setError] = useState({});

    const [fields, errors, form] = useFormInputValidation({
        customer_name: "",
        email_address: "",
        phone_number: "",
    }, {
        customer_name: "required",
        email_address: "required|email",
        phone_number: "required|numeric|digits_between:10,12"
    });

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const isValid = await form.validate(event);
        if (isValid) {
            // console.log(fields, errors);
            // Perform api call here
        }
    };
    // const [changeTestValue, setChangeTestValue] = useState('');


    // useEffect(() => {
    //         if (formValue.email.length === 0) {
    //             validateData({ email: 'email', message: 'Email is required' });
    //         }
    //         if (formValue.password.length < 1) {
    //             validateData({ password: 'password', message: 'Password is required' });
    //         }

    // }, [formValue.email, formValue.password]);



    // const validateData = ({ prop, message }: { [prop: string]: string; message: string; }) => {
    //     setError((prev) => ({
    //         ...prev,
    //         [prop]: message
    //     }));
    // };

    const changeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (formValue.email.length === 0) {
        //     validateData({ email: 'email', message: 'Email is required' });
        // }
        // if (formValue.password.length < 1) {
        //     validateData({ password: 'password', message: 'Password is required' });
        // }
        // setFormValue((prev) => ({
        //     ...prev,
        //     [e.target.name]: e.target.value
        // }));
    };
    // const errorExist = Object.keys(error).length !== 0;
    // console.log(error);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // console.log(formValue);
        // if (Object.keys(error).length === 0) {
        //     toast.success('Form submitted successfully', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // } else {
        //     Object.entries(error).forEach(([name, message]) => {
        //         toast.error(message, {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     });

        // }
    };
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
                        <div className="mx-8 mt-7">
                            <form onSubmit={(e) => submitForm(e)}>
                                <div className="flex flex-col gap-7 ">
                                    <div className="w-full">
                                        <FormInput label="Email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={changeFormValue}
                                            htmlFor="email"
                                            type="email" />
                                    </div>

                                    <FormInput label="Password" placeholder="Password"
                                        name="password"
                                        onChange={changeFormValue}
                                        htmlFor="password" type="password" />
                                    <div className="flex w-[30rem] mt-4 flex-col justify-center items-center gap-2 mx-auto">
                                        <p className="mx-4 text-signupTextColor text-sm text-center">Don't have an account? <Link to="/verify-email">
                                            <span className="text-primaryColor underline">Create an account</span>
                                        </Link></p>

                                        <Button name="Login" className="mx-auto" />
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
