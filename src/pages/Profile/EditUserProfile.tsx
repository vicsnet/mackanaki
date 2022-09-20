import React, { Fragment, useState } from 'react';
import { BiEdit, BiKey, BiPowerOff } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EditProfileFormInput from '../../components/form/EditProfileFormInput';
import EditProfileFormSelect from '../../components/form/EditProfileFormSelect';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import PageLayout from '../../Layouts/PageLayout';
import { useAppDispatch } from '../../redux/app/hooks';
import { logout } from '../../redux/features/authentication/loginSlice';

const EditUserProfile = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [fields, errors, form, isvalidForm] = useFormInputValidation({
    name: "",
    username: "",
    bio: "",
    country: "",
    state: "",
    website: "",
    email: "",
    phone_number: "",
  }, {
    name: "required",
    username: "required|minLength:5",
    bio: "required|minLength:10",
    country: "required",
    state: "required",
    website: "required",
    email: "required|email",
    phone_number: "required|minLength:11|maxLength:11",
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

  const dispatch = useAppDispatch();
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
              <li onClick={()=>dispatch(logout())} className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-red-500"><BiPowerOff className='text-base' /> logout</li>
            </ul>
          </div>}

          <div className="hidden lg:flex flex-2 w-full md:w-auto flex-col border border-gray-500 py-7 md:px-14 px-7">
            <img src="/icons/logo.png" className='mx-auto cursor-pointer md:w-40 w-28 mb-10' alt="logo" />
            <ul className="flex gap-5 flex-col text-navTextDarkColor">
              <Link to="/profile/patrick/edit">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiEdit className='text-base' /> Edit Profile</li>
              </Link>
              <Link to="/profile/change-password">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiKey className='text-base' /> Change Password</li>
              </Link>
                <li onClick={()=>dispatch(logout())} className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-red-500"><BiPowerOff className='text-base' /> logout</li>
            </ul>
          </div>


          <div className="flex flex-1 w-full md:w-auto flex-col gap-7 border border-gray-500 py-7 px-5 md:px-10">
            <div className="flex items-center gap-5">
              <img src="/icons/image.png" className='transition ease-in-out duration-300 hover:scale-110 rounded-full border cursor-pointer md:w-14 md:h-14 w-10 h-10' alt="profile" />
              <div className="flex flex-col gap-1">
                <p className="cursor-pointer md:text-lg text-base text-navTextDarkColor">Thrombrixproject</p>
                <p className="cursor-pointer md:text-sm text-xs text-primaryColor">Change profile photo</p>
                <p className="cursor-pointer md:text-sm text-xs text-primaryColor">Change cover photo</p>
              </div>
            </div>


            <form onSubmit={submitForm}>
              <EditProfileFormInput label="Name" className={errors?.name && "border-red-600 border-2"}
                errors={errors?.name}
                name="name" placeholder="" htmlFor="name" type="text" onChange={(e) => form.handleChangeEvent(e)} />

              <EditProfileFormInput label="Username" className={errors?.username && "border-red-600 border-2"} name="username"
                errors={errors?.username}
                placeholder="" htmlFor="username" type="text" onChange={(e) => form.handleChangeEvent(e)} />

              <div className="flex items-center gap-5 mt-7">
                <label className="w-[130px] text-signupTextColor md:text-sm text-xs">Bio</label>
                <div className="flex flex-col w-full">
                  <textarea style={{ height: "170px" }} onChange={(e) => form.handleTextAreaChangeEvent(e)} className={`p-4 w-full bg-transparent border border-gray-500 rounded-md md:h-12 h-10 outline-none px-5 text-navTextDarkColor md:text-sm text-xs  ${errors?.bio && "border-red-600 border-2"}`} name="bio" placeholder=""></textarea>
                  {errors?.bio && <span className="text-red-600 md:text-sm text-xs mt-2">{errors?.bio}</span>}
                </div>
              </div>


              <div className="flex flex-wrap lg:flex-nowrap justify-between md:gap-5">
                <EditProfileFormSelect label="Country" htmlFor="country" onChange={(e) => form.selectChange(e)} name="country" errors={errors?.country} />
                <EditProfileFormSelect label="State" htmlFor="state" onChange={(e) => form.selectChange(e)} name="state" errors={errors?.state} />
              </div>

              <EditProfileFormInput label="Website" className={errors?.website && "border-red-600 border-2"} name="website"
                errors={errors?.website}
                placeholder="" htmlFor="website" type="text" onChange={(e) => form.handleChangeEvent(e)} />

              <EditProfileFormInput label="Email" className={errors?.email && "border-red-600 border-2"} name="email"
                errors={errors?.email}
                placeholder="" htmlFor="email" type="text" onChange={(e) => form.handleChangeEvent(e)} />

              <EditProfileFormInput label="Phone number" className={errors?.phone_number && "border-red-600 border-2"} name="phone_number"
                errors={errors?.phone_number}
                placeholder="" htmlFor="phone_number" type="number" onChange={(e) => form.handleChangeEvent(e)} />



              <Button name="Update" disabled={isvalidForm} className="ml-auto" />
            </form>
          </div>
        </div>

      </PageLayout>
    </Fragment>
  );
};

export default EditUserProfile;