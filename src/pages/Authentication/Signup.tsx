import React, { CSSProperties, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import StepTwoForm from '../../components/form/StepTwoForm';
import StepOneForm from '../../components/form/StepOneForm';
import Loader from 'react-loader-advanced';
import { ScaleLoader } from 'react-spinners';
import { useAppSelector } from '../../redux/app/hooks';
import { getRegisterState } from '../../redux/features/authentication/registerSlice';


const Signup = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };

    const { status: counStateStatus } = useAppSelector(getRegisterState);
    const [showNext, setShowNext] = useState<{
        status: boolean; fields: { [props: string]: string; };
    }>({
        status: false,
        fields: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
        }
    });

    return (
        <Fragment>
            <PageLayout>
                {/* SIGNUP CONTAINER START */}
             
                <Loader show={counStateStatus === "loading"} backgroundStyle={{ background: "none" }} message={<ScaleLoader cssOverride={override} color="#c1c1c1" />}>
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
                                {showNext.status ?
                                    <StepTwoForm showNext={showNext} setShowNext={setShowNext} />
                                    :
                                    <StepOneForm setShowNext={setShowNext} />
                                }
                            </div>
                            {/* FORM END */}
                        </div>
                    </div>
                </Loader >
                {/* SIGNUP CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default Signup;
