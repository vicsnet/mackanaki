import React, { CSSProperties, Fragment, useEffect, useState } from 'react';
import { BiEdit, BiKey, BiPowerOff } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import Loader from 'react-loader-advanced';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import EditProfileFormInput from '../../components/form/EditProfileFormInput';
import EditProfileFormSelect from '../../components/form/EditProfileFormSelect';
import Button from '../../components/ui/Button';
import useFormInputValidation from '../../hooks/useFormInputValidation';
import PageLayout from '../../Layouts/PageLayout';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { logout } from '../../redux/features/authentication/loginSlice';
import { getAllCountries, getCountriesApi } from '../../redux/features/Country/countrySlice';
import { getAllCountryState, getCountryStateApi } from '../../redux/features/CountryState/countryStateSlice';
import { fetchUserProfileFromLS, getUserProfileData, profileStateReset, userProfile, userProfileApi } from '../../redux/features/user/userProfileSlice';

const EditUserProfile = () => {
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useAppDispatch();
  const { countries, status: counStatus, errors: counErrMsg } = useAppSelector(getAllCountries);
  const { states, status: statesStatus, errors: stateErrMsg } = useAppSelector(getAllCountryState);
  const { data: profiledata, status: profileStatus, error: profileErrMsg, userEditStatus } = useAppSelector(getUserProfileData);


  const [fields, errors, form, isvalidForm] = useFormInputValidation({
    name: profiledata?.name,
    email: profiledata?.email,
    username: profiledata?.username,
    country: profiledata?.country,
    state: profiledata?.state,
    phone_number: profiledata?.phone,
    bio: profiledata?.bio,
    website: "",
  }, {
    name: "required",
    email: "required|email",
    username: "required",
    bio: "required|minLength:10",
    country: "required",
    state: "required",
    website: "required",
    phone_number: "required|minLength:11|maxLength:11",
  });

  const [profilePhoto, setProfilePhoto] = useState<any>("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isvalidForm) {
      const data = {
        name: fields.name,
        country_id: fields.country,
        state_id: fields.state,
        bio: fields.bio,
        phone: fields.phone_number,
        cover_picture: profilePhoto,
        profile_picture: profilePhoto
      };

      dispatch(userProfileApi(data));

      // Perform api call here
    }
  };


  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",

  };

  const showSideMenu = () => {
    setShowmenu(!showmenu);

  };

  useEffect(() => {
    dispatch(getCountriesApi());
    dispatch(userProfile());

    if (userEditStatus === "failed") {
      form.customToast({ type: "error", message: profileErrMsg });
      dispatch(profileStateReset());
    }
    else if (userEditStatus === "success") {
      form.customToast({ type: "success", message: "Profile has been Updated!" });
      dispatch(profileStateReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, profileErrMsg, userEditStatus, fetchUserProfileFromLS]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    // console.log(fileUploaded![0].type)

    setProfilePhoto(fileUploaded![0]);
  };


  const selectedCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== "") {
      fields.country = value;
      dispatch(getCountryStateApi(value));
    }
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
              <Link to="/profile/edit">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiEdit className='text-base' />Edit Profile </li>
              </Link>
              <Link to="/profile/change-password">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiKey className='text-base' /> Change Password</li>
              </Link>
              <li onClick={() => dispatch(logout())} className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-red-500"><BiPowerOff className='text-base' /> logout</li>
            </ul>
          </div>}

          <div className="hidden lg:flex flex-2 w-full md:w-auto flex-col border border-gray-500 py-7 md:px-14 px-7">
            <img src="/icons/logo.png" className='mx-auto cursor-pointer md:w-40 w-28 mb-10' alt="logo" />
            <ul className="flex gap-5 flex-col text-navTextDarkColor">
              <Link to="/profile/edit">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiEdit className='text-base' /> Edit Profile</li>
              </Link>
              <Link to="/profile/change-password">
                <li className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-primaryColor"><BiKey className='text-base' /> Change Password</li>
              </Link>
              <li onClick={() => dispatch(logout())} className="flex items-center gap-3 cursor-pointer md:text-sm text-xs hover:text-red-500"><BiPowerOff className='text-base' /> logout</li>
            </ul>
          </div>
          <div className="flex flex-1 w-full md:w-auto flex-col gap-7 border border-gray-500 py-7 px-5 md:px-10">
            <Loader show={userEditStatus === "loading"} backgroundStyle={{ background: "none" }} message={<BounceLoader cssOverride={override} color="#c1c1c1" />}>
              <div className="flex items-center gap-5">
                {profilePhoto ? <img src={URL.createObjectURL(profilePhoto)} className='transition ease-in-out duration-300 hover:scale-110 rounded-full border cursor-pointer md:w-14 md:h-14 w-10 h-10' alt="profile" /> : <img src={profiledata?.profilephoto ? profiledata?.profilephoto : "/icons/image.png"} className='transition ease-in-out duration-300 hover:scale-110 rounded-full border cursor-pointer md:w-14 md:h-14 w-10 h-10' alt="profile" />}

                <div className="flex flex-col gap-1">
                  <p className="cursor-pointer md:text-lg text-base text-navTextDarkColor">{profiledata?.name}</p>
                  <label htmlFor="profile_photo" className="cursor-pointer md:text-sm text-xs text-primaryColor">Change profile photo</label>
                  <input type="file"
                    id="profile_photo"
                    // ref={hiddenFileInput}
                    name="profile_photo"
                    accept="image/*"
                    onChange={handleChange}
                    // style={{ display: 'none' }}
                    className="w-0 h-0"
                  />
                  <p className="cursor-pointer md:text-sm text-xs text-primaryColor">Change cover photo</p>
                </div>
              </div>


              <form onSubmit={submitForm}>
                <EditProfileFormInput label="Name" className={errors?.name && "border-red-600 border-2"}
                  errors={errors?.name}
                  name="name" value={fields?.name} htmlFor="name" type="text" onChange={(e) => form.handleChangeEvent(e)} />

                <EditProfileFormInput label="Username" value={fields?.username} isDisabled={true} className={errors?.username && "border-red-600 border-2"} name="username"
                  errors={errors?.username}
                  htmlFor="username" type="text" onChange={(e) => form.handleChangeEvent(e)} />

                <div className="flex items-center gap-5 mt-7">
                  <label className="w-[130px] text-signupTextColor md:text-sm text-xs">Bio</label>
                  <div className="flex flex-col w-full">

                    <textarea defaultValue={fields?.bio} style={{ height: "170px" }} onChange={(e) => form.handleTextAreaChangeEvent(e)} className={`p-4 w-full bg-transparent border border-gray-500 rounded-md md:h-12 h-10 outline-none px-5 text-navTextDarkColor md:text-sm text-xs  ${errors?.bio && "border-red-600 border-2"}`} name="bio"></textarea>

                    {errors?.bio && <span className="text-red-600 md:text-sm text-xs mt-2">{errors?.bio}</span>}
                  </div>
                </div>


                <div className="flex flex-wrap lg:flex-nowrap justify-between md:gap-5">
                  <EditProfileFormSelect label="Country" htmlFor="country" countries={countries} onChange={(e) => selectedCountry(e)} name="country" status={counStatus} errors={errors?.country} />
                  <EditProfileFormSelect label="State" htmlFor="state" states={states} onChange={(e) => form.selectChange(e)} name="state" status={statesStatus} errors={errors?.state} />
                </div>

                <EditProfileFormInput label="Website" className={errors?.website && "border-red-600 border-2"} name="website"
                  errors={errors?.website}
                  htmlFor="website" type="text" onChange={(e) => form.handleChangeEvent(e)} />

                <EditProfileFormInput label="Email" className={errors?.email && "border-red-600 border-2"} value={fields?.email} isDisabled={true} name="email"
                  errors={errors?.email}
                  htmlFor="email" type="text" onChange={(e) => form.handleChangeEvent(e)} />

                <EditProfileFormInput label="Phone number" className={errors?.phone_number && "border-red-600 border-2"} name="phone_number" value={fields?.phone_number}
                  errors={errors?.phone_number}
                  htmlFor="phone_number" type="number" onChange={(e) => form.handleChangeEvent(e)} />



                <Button name="Update" disabled={isvalidForm} className="ml-auto" />
              </form>
            </Loader>
          </div>

        </div>

      </PageLayout>
    </Fragment>
  );
};



export default EditUserProfile;