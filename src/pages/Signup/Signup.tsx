import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import { toast } from 'react-toastify';
import StepTwoForm from '../../components/form/StepTwoForm';
import StepOneForm from '../../components/form/StepOneForm';

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
                <div className="flex justify-center w-screen items-center p-6">
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
                                <StepTwoForm submitForm={submitForm} />
                                :
                               <StepOneForm nextForm={nextForm}/>
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
