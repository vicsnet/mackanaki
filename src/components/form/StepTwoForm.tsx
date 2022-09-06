
import React from 'react';
import { Link } from 'react-router-dom';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import Button from '../ui/Button';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const StepTwoForm = () => {
    const [fields, errors, form] = useFormInputValidation({
        country: "",
        state: "",
    }, {
        country: "required",
        state: "required"
    });
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = form.isFormValid;
        if (isValid) {
            // console.log('Submitted');
            form.customToast({ type: "success", message: "Success!" });
            console.log(fields, errors);
            // Perform api call here
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-7">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Country" name="country" placeholder="Country" htmlFor="country" onChange={(e) => form.handleChangeEvent(e)} type="text" />
                    <FormInput label="State" name="state" onChange={(e) => form.handleChangeEvent(e)} placeholder="State" htmlFor="state" type="text" />
                </div>


                <FormSelect label="Category" htmlFor="category" />


                <div className="md:w-[400px] flex mt-8 flex-col justify-center items-center gap-2 mx-auto">
                    <p className="mx-4 text-signupTextColor text-sm text-center">By signing up to Thombrix platform you understand and agree with our <Link to="#">
                        <span className="text-primaryColor underline">Term of Service</span>
                    </Link> and <Link to="#"><span className="text-primaryColor underline">Privacy Policy</span></Link></p>

                    <Button name="Create account" disabled={!form.isFormValid} className="mx-auto" />
                </div>
            </div>
        </form>
    );
};

export default StepTwoForm;