
import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const StepTwoForm = ({ submitForm }: { submitForm: Function; }) => {
    return (
        <form onSubmit={(e) => submitForm(e)}>
            <div className="flex flex-col gap-7">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
                    <FormInput label="Country" placeholder="Country" htmlFor="country" type="text" />
                    <FormInput label="State" placeholder="State" htmlFor="state" type="text" />
                </div>

                <div className="w-full">
                    <FormSelect label="Category" htmlFor="category" />
                </div>

                <div className="flex mt-8 flex-col justify-center items-center gap-2 ">
                    <p className="mx-4 text-signupTextColor text-sm text-center">By signing up to Thombrix platform you understand and agree with our <Link to="#">
                        <span className="text-primaryColor underline">Term of Service</span>
                    </Link> and <Link to="#"><span className="text-primaryColor underline">Privacy Policy</span></Link></p>
                    <button className='mx-auto mt-7 cursor-pointer text-[14px] text-white bg-primaryColor px-10 py-[10px] hover:bg-sky-700 '>Create account</button>
                </div>
            </div>
        </form>
    );
};

export default StepTwoForm;