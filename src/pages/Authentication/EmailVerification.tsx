import React, { CSSProperties, Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import useObsecureEmail from '../../hooks/useObsecureEmail';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getVerifyEmailState, verifyEmail } from '../../redux/features/authentication/verifyEmailSlice';
import Loader from 'react-loader-advanced';
import { ScaleLoader } from 'react-spinners';


const EmailVerification = () => {

    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        code: "",
    }, {
        code: "required|maxLength:5|minLength:5",
    });
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };
    const obscureEmail = useObsecureEmail();
    const [getItem] = useLocalStorage();
    const [email, setEmail] = useState("");
    const dispatch = useAppDispatch();
    const { error, status } = useAppSelector(getVerifyEmailState);
    const navigate = useNavigate();
    const getEmail = getItem('email');


    useEffect(() => {
        if (getEmail !== null) {
            const email = obscureEmail(getEmail!);
            setEmail(email);
        }
        if (status === "failed") {
            form.customToast({ type: "error", message: error });
        } else if (status === "success") {
            form.customToast({ type: "success", message: "Your email has been verified" });
            localStorage.removeItem("email");
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            const data = {
                email: getEmail as string,
                otp: fields.code
            };
            dispatch(verifyEmail(data));
        }
    };

    return (
        <Fragment>
            <PageLayout>
                {/* LOGIN CONTAINER START */}
                <Loader show={status === "loading"} backgroundStyle={{ background: "none" }} message={<ScaleLoader cssOverride={override} color="#c1c1c1" />}>
                    <div className="flex justify-center items-center p-6">
                        <div className="rounded-3xl shadow-lg shadow-zinc-900 bg-secondaryColor h-auto py-10 md:px-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <Link to="/">
                                    <img src="/icons/shortlogo.png" alt="shortlogo" className="w-12 mb-2" />
                                </Link>
                                <p className="text-signupTextColor font-semibold text-md mb-2">Email verification</p>
                                <p className="mx-4 text-signupTextColor md:text-sm text-xs">Please enter the verification code sent to your email</p>
                            </div>

                            {/* FORM START */}
                            <div className="mx-4 md:mx-8">
                                <form noValidate
                                    autoComplete="off"
                                    onSubmit={onSubmit}
                                >
                                    <div className="flex flex-col">
                                        <div className="w-full flex flex-col gap-2 mt-7">
                                            <label htmlFor="code" className="text-signupTextColor md:text-sm text-xs">Email Verification Code</label>
                                            <div className={`flex px-5 items-center gap-4 justify-between overflow-hidden border navTextDarkColor rounded-lg w-full ${errors?.code && "border-red-600 border-2"}`}>
                                                <input name="code"
                                                    placeholder=""
                                                    className={`rounded-md w-1/2 flex-1 h-14 outline-none text-navTextDarkColor bg-transparent text-md`}
                                                    onChange={(e) => form.handleChangeEvent(e)}
                                                    type="password" />
                                                {/* <span className="text-end text-primaryColor md:text-sm text-xs hover:text-sky-500 cursor-pointer">Resend Code</span> */}
                                            </div>
                                        </div>
                                        <p className="text-signupTextColor md:text-sm text-xs mt-3 whitespace-nowrap">Enter the 6-digit code sent to {email}</p>
                                        {errors?.code && <span className="text-red-600 md:text-sm text-xs mt-3">{errors?.code}</span>}
                                        <Button name="Submit" disabled={isvalidForm} className="mx-auto mt-10" />
                                    </div>
                                </form>
                            </div>
                            {/* FORM END */}
                        </div>
                    </div>
                </Loader >
                {/* LOGIN CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default EmailVerification;
