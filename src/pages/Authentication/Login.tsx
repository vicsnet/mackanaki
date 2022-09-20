import React, { CSSProperties, Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';


import FormInput from '../../components/form/FormInput';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import Loader from 'react-loader-advanced';
import { ScaleLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getLoginState, loginUser, resetState } from '../../redux/features/authentication/loginSlice';




const Login = () => {

    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        email: "",
        password: "",
    }, {
        email: "required|email",
        password: "required"
    });

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };

    const { error, status } = useAppSelector(getLoginState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            const data = {
                username: fields.email,
                password: fields.password
            };
            dispatch(loginUser(data));
        }
    };
    
    
    
    useEffect(() => {
        if (status === "failed") {
            form.customToast({ type: "error", message: error });
            dispatch(resetState());
        } else if (status === "success") {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);


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
                                <p className="text-signupTextColor mb-2 font-semibold text-md">Login</p>
                                <p className="mx-4 text-signupTextColor md:text-sm text-xs">Fill in your details below and continue login</p>
                            </div>

                            {/* FORM START */}
                            <div className="mx-8 md:w-[30rem]">
                                <form noValidate
                                    onSubmit={onSubmit}
                                >
                                    <div className="flex flex-col">
                                        <FormInput label="Email"
                                            name="email"
                                            errors={errors?.email}
                                            placeholder="Email"
                                            className={errors?.email && "border-red-600 border-2"}
                                            htmlFor="email"
                                            onChange={(e) => form.handleChangeEvent(e)}
                                            type="email"
                                        />


                                        <FormInput label="Password" placeholder="Password"
                                            errors={errors?.password}
                                            name="password"
                                            onChange={(e) => form.handleChangeEvent(e)}
                                            className={errors?.password && "border-red-600 border-2"}
                                            htmlFor="password"
                                            type="password"
                                        />


                                        <div className="flex mt-7 flex-col justify-center items-center gap-2 mx-auto">
                                            <p className="mx-4 text-signupTextColor md:text-sm text-xs text-center">Don't have an account? <Link to="/signup-options">
                                                <span className="text-primaryColor underline">Create an account</span>
                                            </Link>
                                            </p>
                                            <Button name="Login" disabled={isvalidForm} className="mx-auto" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* FORM END */}
                        </div>
                    </div>
                </Loader>
                {/* LOGIN CONTAINER END */}


            </PageLayout>
        </Fragment>
    );
};

export default Login;
