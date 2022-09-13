import React, { Fragment, useState } from 'react';
import { BiEdit, BiKey, BiPowerOff } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EditProfileFormInput from '../../components/form/EditProfileFormInput';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import PageLayout from '../../Layouts/PageLayout';

const ChangePassword = () => {
    const [showmenu, setShowmenu] = useState(false);
    const [fields, errors, form, isvalidForm] = useFormInputValidation({
        old_password: "",
        new_password: "",
        confirm_new_password: "",
    }, {
        old_password: "required|password",
        new_password: "required|password",
        confirm_new_password: "required|confirm_password",
    });

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isvalidForm) {
            form.customToast({ type: "success", message: "Success!" });
            console.log(fields, errors);
            // Perform api call here
        }
    };

    const showSideMenu = () => {
        setShowmenu(!showmenu);

    };
    return (
        <Fragment>
            <PageLayout paddingTop='mt-32'>
                <div className="flex flex-wrap flex-row mx-10 my-24 md:mx-40 shadow-2xl">
                    <div className="lg:hidden flex flex-2 w-full justify-between items-center flex-row border border-gray-500 p-7">
                        <img src="/icons/MACANACKI.png" className='cursor-pointer w-10' alt="logo" />
                        {showmenu ? <MdOutlineClose onClick={showSideMenu} className=' cursor-pointer text-navTextDarkColor text-3xl' /> :
                            <img onClick={showSideMenu} src="/icons/hamburger.png" className='cursor-pointer w-[30px] h-[20px]' alt="logo" />}
                    </div>

                    {showmenu && <div className="lg:hidden flex flex-2 w-full flex-col border border-gray-500 py-7 md:px-14 px-7">
                        <img src="/icons/logo.png" className='hidden mx-auto cursor-pointer md:w-40 w-28 mb-10' alt="logo" />
                        <ul className="flex gap-5 flex-col text-navTextDarkColor">
                            <Link to="/profile/patrick/edit">
                                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiEdit className='text-base' /> Edit Profile</li>
                            </Link>
                            <Link to="/profile/change-password">
                                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiKey className='text-base' /> Change Password</li>
                            </Link>
                        </ul>
                    </div>}

                    <div className="hidden lg:flex flex-2 w-full md:w-auto flex-col border border-gray-500 py-7 md:px-14 px-7">
                        <img src="/icons/logo.png" className='mx-auto cursor-pointer md:w-40 w-28 mb-10' alt="logo" />
                        <ul className="flex gap-5 flex-col text-navTextDarkColor">
                            <Link to="/profile/patrick/edit">
                                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiEdit className='text-base' /> Edit Profile</li>
                            </Link>
                            <Link to="">
                                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiKey className='text-base' /> Change Password</li>
                            </Link>
                            <Link to="/">
                                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-red-500"><BiPowerOff className='text-base' /> logout</li>
                            </Link>
                        </ul>
                    </div>


                    <div className="flex flex-1 w-full md:w-auto flex-col gap-7 border border-gray-500 py-7 px-5 md:px-10">
                        <div className="flex items-center gap-5">
                            <img src="/icons/image.png" className='transition ease-in-out duration-300 hover:scale-110 rounded-full border cursor-pointer md:w-14 md:h-14 w-10 h-10' alt="profile" />
                            <div className="flex flex-col gap-1">
                                <p className="cursor-pointer md:text-lg text-base text-navTextDarkColor">Thrombrixproject</p>

                            </div>
                        </div>


                        <form onSubmit={submitForm}>
                            <EditProfileFormInput label="Old Password" className={errors?.old_password && "border-red-600 border-2"}
                                errors={errors?.old_password}
                                name="old_password" placeholder="" htmlFor="old_password" type="password" onChange={(e) => form.handleChangeEvent(e)} />


                            <EditProfileFormInput label="New Password" className={errors?.new_password && "border-red-600 border-2"} name="new_password"
                                errors={errors?.new_password}
                                placeholder="" htmlFor="new_password" type="password" onChange={(e) => form.handleChangeEvent(e)} />


                            <EditProfileFormInput label="Confirm New Password" className={errors?.confirm_new_password && "border-red-600 border-2"} name="confirm_new_password"
                                errors={errors?.confirm_new_password}
                                placeholder="" htmlFor="confirm_new_password" type="password" onChange={(e) => form.handleChangeEvent(e)} />


                            <Button name="Change Password" disabled={isvalidForm} className="ml-auto" />
                        </form>
                    </div>
                </div>

            </PageLayout>
        </Fragment>
    );
};

export default ChangePassword;