import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/form/FormInput';
import PageLayout from '../../Layouts/PageLayout';
import { toast } from 'react-toastify';
import Button from '../../components/ui/Button';


const EmailVerification = () => {


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success('Form submitted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                                        <FormInput label="Email" placeholder="Email" htmlFor="email"
                                        name="email" type="email" />
                                    </div>

                                    <FormInput label="Password" placeholder="Password" htmlFor="password"
                                    name="password" 
                                    type="password" />
                                    <div className="flex w-[30rem] mt-8 flex-col justify-center items-center gap-2 mx-auto">
                                        <p className="mx-4 text-signupTextColor text-sm text-center">Don't have an account? <Link to="/signup">
                                            <span className="text-primaryColor underline">Create an account</span>
                                        </Link></p>
                                        <Button name="Submit" className="mx-auto" />
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

export default EmailVerification;