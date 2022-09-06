import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import StepTwoForm from '../../components/form/StepTwoForm';
import StepOneForm from '../../components/form/StepOneForm';


const Signup = () => {


    const [showNext, setShowNext] = useState(false);
    return (
        <Fragment>
            <PageLayout>
                {/* SIGNUP CONTAINER START */}
                <div className="flex justify-center items-center p-6">
                    <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor h-auto py-10 md:px-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to="/">
                                <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                            </Link>
                            <p className="text-signupTextColor font-semibold text-md mb-2">Sign up</p>
                            <p className="mx-4 text-signupTextColor md:text-sm text-xs">Fill in your details below and continue signing up</p>
                        </div>

                        {/* FORM START */}
                        <div className="mx-8 mt-4">
                            {showNext ?
                                <StepTwoForm />
                                :
                                <StepOneForm setShowNext={setShowNext} />
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
