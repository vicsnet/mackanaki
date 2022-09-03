import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


const MenuProfile = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} style={{ clipPath: "polygon(0px 8%, 70% 8%, 74% 2%, 78% 8%, 100% 8%, 100% 100%, 0px 100%)" }} className="hidden lg:flex flex-col absolute top-[60px] drop-shadow-lg rounded-lg right-[5.5rem] w-[130px] bg-dropdownbgColor pt-4 py-2 pl-3">


            <ul className='flex flex-col gap-2 justify-center'>
                <Link to="/signup">
                    <li className="cursor-pointer text-sm font-semibold hover:text-primaryColor transition-all duration-300 ease-in-out">SIGN UP</li>
                </Link>
                <Link to="/">
                    <li className="cursor-pointer text-sm font-semibold hover:text-primaryColor transition-all duration-300 ease-in-out">LOGIN </li>
                </Link>
            </ul>

        </motion.div>
    );
};

export default MenuProfile;