import { motion } from 'framer-motion';
import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
import { Link } from 'react-router-dom';


const MenuProfile = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} style={{ clipPath: "polygon(0px 8%, 70% 8%, 74% 2%, 78% 8%, 100% 8%, 100% 100%, 0px 100%)" }} className="hidden lg:flex flex-col absolute top-[60px] drop-shadow-lg rounded-lg right-[4.6rem] w-[180px] bg-dropdownbgColor pt-10 pb-7 px-4">

            <ul className='flex flex-col gap-5 justify-center'>
                <Link to="/signup-options">
                    <li className="flex justify-between items-center cursor-pointer text-md font-semibold hover:text-primaryColor transition-all duration-300 ease-in-out">SIGN UP <span><FaSignInAlt /></span></li>
                </Link>
                <Link to="/login">
                    <li className="flex justify-between items-center cursor-pointer text-md font-semibold hover:text-primaryColor transition-all duration-300 ease-in-out">LOGIN <span><GoSignIn /></span></li>
                </Link>
            </ul>

        </motion.div>
    );
};

export default MenuProfile;