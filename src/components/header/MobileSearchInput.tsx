import { motion } from 'framer-motion';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

const MobileSearchInput = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="absolute top-24 bg-slate-800 mx-auto shadow-2xl p-5 w-full">
            <div className="flex items-center p-2 gap-2 overflow-hidden rounded-lg w-full py-4 h-11 ">
                <input type="text" className="outline-none bg-transparent text-navTextDarkColor text-sm w-full" placeholder="Search items, collections and accounts" />
                <div className="bg-primaryColor cursor-pointer p-2 rounded-full">
                    <BiSearch className="text-white text-2xl" />
                </div>
            </div>
        </motion.div>
    );
};

export default MobileSearchInput;