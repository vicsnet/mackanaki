import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideBarMenu = ({ setShowmenu, showmenu }: { setShowmenu: Function; showmenu: boolean; }) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}  className="lg:hidden flex absolute top-0 right-0 w-full md:w-1/2 h-screen bg-bgDarkColor flex-col gap-24 p-8">
            <MdOutlineClose onClick={() => setShowmenu(!showmenu)} className='cursor-pointer text-navTextDarkColor text-4xl ml-auto' />
            <div className="h-full pb-32 justify-between items-center flex-col flex">
                <Link to="/">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">HOME</p>
                </Link>
                <Link to="/post/create">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">ADD NEW</p>
                </Link>
                <Link to="/profile/patrick">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">PROFILE</p>
                </Link>
                <Link to="/signup">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">SIGNUP</p>
                </Link>
                <Link to="/login">
                    <p onClick={() => setShowmenu(false)} className="text-white font-bold text-2xl">LOGIN</p>
                </Link>

            </div>
        </motion.div>
    );
};

export default SideBarMenu;