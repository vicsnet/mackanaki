import { motion } from 'framer-motion';
import React from 'react';
import { BiBell, BiEnvelope, BiPowerOff, BiUserCircle } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { FiInstagram, FiSettings } from 'react-icons/fi';
import { RiTwitterFill } from 'react-icons/ri';
import { GrFacebookOption, GrLinkedinOption } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useAppDispatch } from '../../redux/app/hooks';
import { logout } from '../../redux/features/authentication/loginSlice';
import MobileMenuLink from './MobileMenuLink';
import { MdPostAdd } from 'react-icons/md';

const SideBarMenu = ({ setShowmenu }: { setShowmenu: Function; }) => {

    const isLoggedIn = useAuth();
    const dispatch = useAppDispatch();

    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="lg:hidden flex absolute top-[5rem] right-0 w-full md:w-1/2 bg-bgDarkColor h-[92vh] flex-col justify-between">

            <div className="gap-14 flex-col flex mx-10 mt-10 overflow-y-auto my-7">
                <Link to="/profile">
                    <MobileMenuLink setShowmenu={setShowmenu} name="Profile">
                        <BiUserCircle className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                </Link>
                <Link to="/post/create">
                    <MobileMenuLink setShowmenu={setShowmenu} name="Add Post">
                        <MdPostAdd className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                </Link>
                <Link to="/">
                    <MobileMenuLink setShowmenu={setShowmenu} name="Notifications">
                        <BiBell className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                </Link>
                <Link to="/">
                    <MobileMenuLink setShowmenu={setShowmenu} name="Messages">
                        <BiEnvelope className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                </Link>
                <Link to="/">
                    <MobileMenuLink setShowmenu={setShowmenu} name="Settings">
                        <FiSettings className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                </Link>
                {
                    isLoggedIn &&
                    <MobileMenuLink onclick={() => dispatch(logout())} setShowmenu={setShowmenu} name="Logout">
                        <BiPowerOff className="md:text-[30px] text-[27px]" />
                    </MobileMenuLink >
                }
            </div>
            <div className="flex flex-col">
                <button onClick={() => { }} className="cursor-pointer text-base text-white bg-primaryColor hover:bg-sky-700 py-5 rounded-md mx-10">
                    <p className="text-white">Monetize Account</p>
                </button>
                <div className="flex justify-center md:gap-10 gap-7 text-gray-400 bg-navbarDarkColor pt-7 pb-10 mt-5">
                    <RiTwitterFill className="md:text-[20px] text-[15px]" />
                    <FiInstagram className="md:text-[20px] text-[15px]" />
                    <GrFacebookOption className="md:text-[23px] text-[15px]" />
                    <BsYoutube className="md:text-[23px] text-[15px]" />
                    <GrLinkedinOption className="md:text-[20px] text-[15px]" />
                    <FaTiktok className="md:text-[20px] text-[15px]" />
                </div>
            </div>
            {/* <Link to="/">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">HOME</p>
                </Link>
                <Link to="/post/create">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">ADD NEW</p>
                </Link>
                <Link to="/profile">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">PROFILE</p>
                </Link>

                {isLoggedIn ? <p onClick={() => dispatch(logout())} className="cursor-pointer text-white font-bold text-2xl">LOGOUT</p> :
                    <>
                        <Link to="/signup-options">
                            <p onClick={() => setShowmenu(false)} className="cursor-pointer text-white font-bold text-2xl">SIGNUP</p>
                        </Link>
                        <Link to="/login">
                            <p onClick={() => setShowmenu(false)} className="cursor-pointer text-white font-bold text-2xl">LOGIN</p>
                        </Link>
                    </>
                } */}

        </motion.div>
    );
};

export default SideBarMenu;