import React, { CSSProperties, Fragment, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiEnvelope, BiSearch } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BsInstagram, BsTwitter, BsFillTelephoneFill, BsShareFill, BsThreeDots } from 'react-icons/bs';
import PageLayout from '../../Layouts/PageLayout';
import { MdRefresh } from 'react-icons/md';
import ProfilePostCard from '../../components/post/ProfilePostCard';
import { Link } from 'react-router-dom';
import { fetchUserProfileFromLS, getUserProfileData, userProfile } from '../../redux/features/user/userProfileSlice';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import Loader from 'react-loader-advanced';
import { SyncLoader } from 'react-spinners';


const UserProfile = () => {

  const dispatch = useAppDispatch();
  const { data, error, status } = useAppSelector(getUserProfileData);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    dispatch(fetchUserProfileFromLS());
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <Fragment>
      <PageLayout>
        <PageLayout paddingTop="pt-0">
          {/* LOGIN CONTAINER START */}
          <Loader show={status === "loading"} message={<SyncLoader cssOverride={override} color="#c1c1c1" />}>
            <div className="relative">
              <img src={data?.coverphoto} className='cursor-pointer md:h-[30rem] h-[20rem] w-full object-cover' alt="bgimage" />
              <div className="absolute z-1 -bottom-10 left-10 flex items-end">
                <img src={data?.profilephoto} className="bg-white w-28 h-28 md:w-40 md:h-40 rounded-xl border-2 drop-shadow-lg" alt="profileimage" />
              </div>
            </div>
            <div className="pt-16 px-10 w-full">
              {/* HEADING BACKGROUND START */}
              <div className="flex justify-between items-center gap-7 md:gap-5 flex-wrap">
                <div className="flex mr-10 lg:mr-20 items-center">
                  <h3 className="text-lg text-text-lg text-navTextDarkColor mr-2 font-semibold">{data?.name}</h3>
                  <img src="icons/MAC-017.png" className="w-5 rounded-lg" alt="" />
                </div>
                {/* MESSAGE AND FOLLOW BUTTON START*/}
                <div className="flex flex-1 gap-5 flex-wrap">
                  <Link to="/profile/edit">
                    <button className='text-md px-5 py-1 w-32 text-navTextDarkColor bg-transparent border border-navTextDarkColor'>Edit Profile</button>
                  </Link>

                  <div className="flex items-center gap-2 px-1 cursor-pointer border border-navTextDarkColor"> <BsThreeDots className="cursor-pointer  text-navTextDarkColor text-2xl" />
                  </div>
                </div>
                {/* MESSAGE AND FOLLOW BUTTON END*/}

                {/* SOCIAL ICONS START */}
                <div className='flex flex-wrap flex-2 justify-start items-center gap-5 lg:gap-10'>
                  <TbWorld className="cursor-pointer  text-navTextDarkColor text-xl" />
                  <BiEnvelope className="cursor-pointer  text-navTextDarkColor text-xl" />
                  <BsInstagram className="cursor-pointer  text-navTextDarkColor text-lg" />
                  <BsTwitter className="cursor-pointer  text-navTextDarkColor text-lg" />
                  <FaFacebookF className="cursor-pointer  text-navTextDarkColor text-lg" />
                  <BsFillTelephoneFill className="cursor-pointer  text-navTextDarkColor text-md" />
                  <AiFillStar className="cursor-pointer  text-navTextDarkColor text-xl" />
                  <BsShareFill className="cursor-pointer  text-navTextDarkColor text-lg" />
                  <FiMoreHorizontal className="cursor-pointer  text-navTextDarkColor text-xl" />
                </div>
                {/* SOCIAL ICONS END */}
              </div>
              {/* HEADING BACKGROUND START */}


              <h3 className="text-md text-text-md text-navTextDarkColor mr-2 my-4 font-semibold">@{data?.username}</h3>

              {/* TAGS START */}
              <div className="flex gap-3 flex-wrap justify-between">
                <div className="flex items-center gap-2 px-5 py-2 cursor-pointer border border-navTextDarkColor">
                  <button className='text-[13px] font-semibold text-navTextDarkColor bg-transparent'>{data?.category}</button>
                </div>
                <div className="flex items-center gap-2 px-5 py-2 cursor-pointer border border-navTextDarkColor"> <GoLocation className="font-semibold cursor-pointer  text-navTextDarkColor text-lg" />
                  <button className='text-[13px] font-semibold text-navTextDarkColor bg-transparent'>{data?.state}, {data?.country}</button>
                </div>
              </div>
              {/* TAGS END */}


              {/* DESCRIPTION START */}
              <p className="text-md text-text-md text-navTextDarkColor mr-2 mt-4 mb-2 md:w-1/2 w-full text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptas quasi fuga reiciendis aperiam voluptatem, molestiae nihil, ullam beatae porro odio incidunt sequi sed modi veniam maiores autem perspiciatis maxime</p>
              <p className="text-navTextDarkColor text-md font-semibold cursor-pointer">+ more</p>
              {/* DESCRIPTION END */}


              {/* FOLLOWER, FOLLOWEING, POST LIKES AND TOTAL LIKES COUNT START*/}
              <div className="flex flex-wrap gap-5 md:gap-9 mt-6 mb-16 w-full">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-navTextDarkColor text-base text-[20px] lg:text-[30px] cursor-pointer">1.1k</p>
                  <p className="text-navTextDarkColor text-base cursor-pointer">followers</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-navTextDarkColor text-base text-[20px] lg:text-[30px] cursor-pointer">587</p>
                  <p className="text-navTextDarkColor text-base cursor-pointer">following</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-navTextDarkColor text-base text-[20px] lg:text-[30px] cursor-pointer">350</p>
                  <p className="text-navTextDarkColor text-base cursor-pointer">total post</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-navTextDarkColor text-base text-[20px] lg:text-[30px] cursor-pointer">10.4k</p>
                  <p className="text-navTextDarkColor text-base cursor-pointer">total likes</p>
                </div>
              </div>
              {/* FOLLOWER, FOLLOWEING, POST LIKES AND TOTAL LIKES COUNT END*/}


              {/* SEARCH & REFRESH START */}
              <div className="flex flex-wrap gap-5 mb-10">
                <div className="flex flex-1 items-center p-2 gap-2 overflow-hidden border-2 navTextDarkColor rounded-lg w-full  py-4 h-12 ">
                  <BiSearch className="text-navTextDarkColor text-2xl cursor-pointer" />
                  <input type="text" className="outline-none bg-transparent text-navTextDarkColor text-sm w-full" placeholder="Search by name or features" />
                </div>
                <div className="hidden md:flex items-center justify-center p-2 gap-2 overflow-hidden border-2 navTextDarkColor rounded-lg w-1/4 py-4 h-12">
                  <MdRefresh className="font-semibold cursor-pointer  text-navTextDarkColor text-2xl" />
                  <button className='text-[13px] font-semibold text-navTextDarkColor bg-transparent'>10,000 items</button>
                </div>
              </div>
              {/* SEARCH END */}


              {/* POST CONTAINER START */}
              <div className="flex flex-row mb-10 gap-5 lg:justify-start justify-center mx-2 flex-wrap">
                {/* POST CARD START */}
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                {/* POST CARD END */}
              </div>

            </div>
          </Loader>
        </PageLayout>

      </PageLayout>
    </Fragment>
  );
};

export default UserProfile;