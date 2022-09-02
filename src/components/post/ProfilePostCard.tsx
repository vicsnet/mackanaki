import React from 'react';
import { BsArrowDown } from 'react-icons/bs';


const ProfilePostCard = () => {
    return (
        <div className="border transition ease-in-out duration-300 hover:scale-105 border-slate-500 cursor-pointer relative rounded-xl shadow-lg bg-blue-500 h-[350px] md:w-[17rem] lg:w-[18.5rem]">
            <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480" className="object-cover h-full rounded-xl" alt="postimage" />
            <BsArrowDown className="absolute right-4 z-5 top-4 font-semibold cursor-pointer  text-navTextDarkColor text-2xl" />
        </div>
    );
};

export default ProfilePostCard;