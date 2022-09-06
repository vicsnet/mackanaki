import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import SignUpOptionBtn from '../../components/ui/SignUpOptionBtn';


const SignupOptions = () => {


    return (
        <Fragment>
            <PageLayout>
                {/* SIGN UP OPTION CONTAINER START */}
                <div className="flex justify-center items-center p-6">
                    <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor h-auto py-10 md:px-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to="/">
                                <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                            </Link>
                            <p className="text-signupTextColor mb-2 font-semibold text-md">Sign up</p>
                            <p className="w-1/2 text-signupTextColor md:text-sm text-xs text-center">By signing up to Thombrix platform you understand and agree with our <Link to="#">
                                <span className="text-primaryColor underline">Term of Service</span>
                            </Link> and <Link to="#"><span className="text-primaryColor underline">Privacy Policy</span></Link></p>
                        </div>

                        {/* FORM START */}
                        <div className="flex flex-col px-10">
                            <SignUpOptionBtn icon="/icons/mail.png" text="Sign up with email address" url="/signup"/>
                            <SignUpOptionBtn icon="/icons/google.png" text="Sign up with Google" url="/signup"/>
                            {/* <SignUpOptionBtn icon="/icons/phone.png" text="Sign up with Phone Number" url=""/> */}
                        </div>
                        {/* FORM END */}


                        <p className="mx-4 mt-10 text-signupTextColor md:text-sm text-xs text-center">Already a user? <Link to="/login">
                            <span className="text-signupTextColor underline">Login</span>
                        </Link>
                        </p>
                    </div>
                </div>
                {/* SIGN UP OPTION CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default SignupOptions;
