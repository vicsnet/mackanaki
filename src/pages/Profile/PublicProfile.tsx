import React, { Fragment } from 'react';
import { AiOutlineMessage, AiFillStar } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsInstagram, BsTwitter, BsFillTelephoneFill, BsShareFill } from 'react-icons/bs';
import PageLayout from '../../Layouts/PageLayout';

const PublicProfile = () => {
  return (
    <Fragment>
      <PageLayout paddingTop="pt-0">
        <div className="relative">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className='cursor-pointer md:h-[30rem] h-[20rem] w-full object-cover' alt="bgimage" />
          <div className="absolute z-30 -bottom-10 left-10 flex items-end">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="bg-white w-28 h-28 md:w-40 md:h-40 rounded-xl border-2 drop-shadow-lg" alt="profileimage" />
          </div>
        </div>
        <div className="pt-16 px-10 w-full">
          <div className="flex justify-between items-center gap-7 md:gap-5 flex-wrap">
            <div className="flex mr-10 lg:mr-24 items-center">
              <h3 className="text-md text-slate-300 mr-2 font-semibold">ThrombrixNFT</h3>
              <img src="icons/MAC-017.png" className="w-5 rounded-lg" alt="" />
            </div>
            {/* MESSAGE AND FOLLOW BUTTON START*/}
            <div className="flex flex-1 gap-3">
              <div className="flex items-center gap-2 px-5 py-1 w-32 cursor-pointer border border-navTextDarkColor"> <AiOutlineMessage className="cursor-pointer  text-navTextDarkColor text-lg" />
                <button className='text-[12px] text-navTextDarkColor bg-transparent'>Message</button>
              </div>
              <button className='cursor-pointer text-[12px] text-white bg-primaryColor px-5 py-[2px] hover:bg-sky-700 w-32'>Follow</button>
              <div className="flex items-center gap-2 px-1 cursor-pointer bg-primaryColor"> <RiArrowDownSLine className="cursor-pointer  text-navTextDarkColor text-2xl" />
              </div>
            </div>
            {/* MESSAGE AND FOLLOW BUTTON END*/}

            {/* SOCIAL ICONS START */}
            <div className='flex flex-2 justify-end  items-center gap-5 lg:gap-10'>

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
        </div>
      </PageLayout>
    </Fragment>
  );
};

export default PublicProfile;