
import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { resetState, getRegisterState, registerUser } from '../../redux/features/authentication/registerSlice';
import { getAllCategories, getCategoriesApi } from '../../redux/features/Category/categorySlice';
import { getAllCountries, getCountriesApi } from '../../redux/features/Country/countrySlice';
import { getAllCountryState, getCountryStateApi } from '../../redux/features/CountryState/countryStateSlice';
import Button from '../ui/Button';
import FormSelect from './FormSelect';



const StepTwoForm = ({ showNext, setShowNext }: {
    showNext: {
        status: boolean;
        fields: { [props: string]: string; };
    };
    setShowNext: React.Dispatch<React.SetStateAction<{
        status: boolean;
        fields: { [props: string]: string; };
    }>>;
}) => {
    const dispatch = useAppDispatch();
    const { categories, status: catStatus, errors: catErrMsg } = useAppSelector(getAllCategories);
    const { countries, status: counStatus, errors: counErrMsg } = useAppSelector(getAllCountries);
    const { states, status: statesStatus, errors: stateErrMsg } = useAppSelector(getAllCountryState);
    const { status: registerStatus, error: registerErrMsg } = useAppSelector(getRegisterState);
    const navigate = useNavigate();
    const [getItem, setItem] = useLocalStorage();

    let [fields, errors, form, isvalidForm] = useFormInputValidation({
        state: "",
        country: "",
        category: "",
    }, {
        state: "required",
        country: "required",
        category: "required"
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            // Perform api call here
            const data = {
                name: showNext.fields.name,
                username: showNext.fields.username,
                email: showNext.fields.email,
                password: showNext.fields.password,
                country_id: fields.country,
                state_id: fields.state,
                category_id: fields.category,
            };
            // setItem("email", showNext.fields.email);
            // navigate('/verify-email');
            dispatch(registerUser(data));

        }
    };

    useEffect(() => {
        dispatch(getCategoriesApi());
        dispatch(getCountriesApi());
        if (catErrMsg !== "") {
            form.customToast({ type: "error", message: catErrMsg! });
        }
        if (counErrMsg !== "") {
            form.customToast({ type: "error", message: counErrMsg! });
        }
        if (stateErrMsg !== "") {
            form.customToast({ type: "error", message: stateErrMsg! });
        }
        if (registerStatus === "failed") {
            if (registerErrMsg?.email) {
                form.customToast({ type: "error", message: registerErrMsg.email[0] });
                dispatch(resetState());
            } else {
                form.customToast({ type: "error", message: registerErrMsg });
                dispatch(resetState());
            }
        } else if (registerStatus === "success") {
            form.customToast({ type: "success", message: "Registration successfully, Kindly complete registration by verifying your email. An OTP has been sent to your email!" });
            setItem("email", showNext.fields.email);
            navigate('/verify-email');

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, registerErrMsg, registerStatus]);



    const selectedCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value !== "") {
            fields.country = value;
            dispatch(getCountryStateApi(value));
        }
    };

    const prevForm = () => {
        setShowNext((prev) => ({ ...prev, status: false }));
        dispatch(resetState())
    };

    return (

        <form onSubmit={onSubmit}>
            <div className="flex flex-col">
                <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-5">

                    <FormSelect label="Country" htmlFor="country" countries={countries} onChange={(e) => selectedCountry(e)} name="country" status={counStatus} errors={errors?.country} />
                    {/* <FormInput label="Country" countries={countries} className={errors?.country && "border-red-600 border-2"} name="country"
                        errors={errors?.country}
                        placeholder="Country" htmlFor="country" onChange={(e) => form.handleChangeEvent(e)} type="text" /> */}
                    <FormSelect label="State" htmlFor="state" states={states} onChange={(e) => form.selectChange(e)} name="state" status={statesStatus} errors={errors?.state} />
                    {/* 
                    <FormInput label="State" className={errors?.state && "border-red-600 border-2"} name="state" onChange={(e) => form.handleChangeEvent(e)}
                        errors={errors?.state}
                        placeholder="State" htmlFor="state" type="text" /> */}
                </div>


                <FormSelect label="Category" htmlFor="category" categories={categories} onChange={(e) => form.selectChange(e)} name="category" status={catStatus} errors={errors?.category} />

                <div className="md:w-[400px] flex mt-4 flex-col justify-center items-center gap-2 mx-auto">
                    <p className="mx-4 text-signupTextColor md:text-sm text-xs text-center">By signing up to Thombrix platform you understand and agree with our <Link to="#">
                        <span className="text-primaryColor underline">Term of Service</span>
                    </Link> and <Link to="#"><span className="text-primaryColor underline">Privacy Policy</span></Link></p>

                </div>
                <div className="flex justify-between">
                    <Button name="Previous" onClick={prevForm}>
                        <BiArrowBack />
                    </Button>
                    <Button name="Create account" disabled={isvalidForm} />
                </div>
            </div>
        </form>

    );
};

export default StepTwoForm;

