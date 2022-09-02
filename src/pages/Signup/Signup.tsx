import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/form/FormInput';
import FormSelect from '../../components/form/FormSelect';
import PageLayout from '../../Layouts/PageLayout';
import { toast } from 'react-toastify';

const Signup = () => {
    const [showNext, setShowNext] = useState(false);

    const nextForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setShowNext(true);
    };

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
                {/* SIGNUP CONTAINER START */}
                <div className="flex justify-center items-center h-screen p-6">
                    <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor w-[40rem] h-auto py-10 px-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to="/">
                                <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                            </Link>
                            <p className="text-signupTextColor font-semibold text-md">Sign up</p>
                            <p className="mx-4 text-signupTextColor text-sm">Fill in your details below and continue signing up</p>
                        </div>

                        {/* FORM START */}
                        <div className="mx-8 mt-7">
                            {showNext ?
                                <form onSubmit={(e) => submitForm(e)}>
                                    <div className="flex flex-col gap-7">
                                        <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                                            <FormInput label="Country" placeholder="Country" htmlFor="country" type="text" />
                                            <FormInput label="State" placeholder="State" htmlFor="state" type="text" />
                                        </div>

                                        <div className="w-full">
                                            <FormSelect label="Category" htmlFor="category" />
                                        </div>

                                        <div className="flex mt-8 flex-col justify-center items-center gap-2 ">
                                            <p className="mx-4 text-signupTextColor text-sm text-center">By signing up to Thombrix platform you understand and agree with our <Link to="#">
                                                <span className="text-primaryColor underline">Term of Service</span>
                                            </Link> and <Link to="#"><span className="text-primaryColor underline">Privacy Policy</span></Link></p>
                                            <button className='mx-auto mt-7 cursor-pointer text-[14px] text-white bg-primaryColor px-10 py-[10px] hover:bg-sky-700 '>Create account</button>
                                        </div>
                                    </div>
                                </form>
                                :
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
                            }
                        </div>
                        {/* FORM END */}
                    </div>
                </div>
                {/* SIGNUP CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default Signup;
