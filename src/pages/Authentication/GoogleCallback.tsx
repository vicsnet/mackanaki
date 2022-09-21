
import React, { CSSProperties, Fragment, useEffect } from 'react';
import Loader from 'react-loader-advanced';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { SyncLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import SignUpOptionBtn from '../../components/ui/SignUpOptionBtn';
import PageLayout from '../../Layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getGoogleAuthState, resetState } from '../../redux/features/authentication/googleAuthSlice';
import { getLoginState, googleCallback } from '../../redux/features/authentication/loginSlice';
// import { gooogleAuthToken, resetState } from '../../redux/features/authentication/loginSlice';

const GoogleCallback = () => {

    const location = useLocation();

    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    const { status, error } = useAppSelector(getLoginState);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };

    useEffect(() => {
        dispatch(googleCallback(location.search));

        if (status === "failed") {
            toast.error(error, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(resetState());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <PageLayout>
                {/* SIGN UP OPTION CONTAINER START */}
                <Loader show={status === "loading"} message={<SyncLoader cssOverride={override} color="#c1c1c1" />}>
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
                                <Link to="/signup" >
                                    <SignUpOptionBtn icon="/icons/mail.png" text="Sign up with email address" />
                                </Link>
                                <SignUpOptionBtn icon="/icons/google.png" text="Sign up with Google" />
                            </div>
                            {/* FORM END */}


                            <p className="mx-4 mt-10 text-signupTextColor md:text-sm text-xs text-center">Already a user? <Link to="/login">
                                <span className="text-signupTextColor underline">Login</span>
                            </Link>
                            </p>
                        </div>
                    </div>

                    {status === "success" && <Navigate replace to="/" />}
                </Loader>
                {/* SIGN UP OPTION CONTAINER END */}


            </PageLayout>
        </Fragment >
    );
};

export default GoogleCallback;


