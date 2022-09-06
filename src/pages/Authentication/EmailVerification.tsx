import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';


const EmailVerification = () => {

    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        code: "",
    }, {
        code: "required|maxLength:6|minLength:6",
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
                                            <span className="text-end text-primaryColor md:text-sm text-xs hover:text-sky-500 cursor-pointer">Resend Code</span>
                                        </div>
                                    </div>
                                    <p className="text-signupTextColor md:text-sm text-xs mt-3 whitespace-nowrap">Enter the 6-digit code sent to examp*******@gmail.com</p>
                                    {errors?.code && <span className="text-red-600 md:text-sm text-xs mt-3">{errors?.code}</span>}
                                    <Button name="Submit" disabled={isvalidForm} className="mx-auto mt-10" />
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
