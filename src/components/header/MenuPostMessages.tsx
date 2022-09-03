import { motion } from 'framer-motion';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Messages from './Messages';


const MenuPostMessages = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} style={{ clipPath: "polygon(0px 8%, 70% 8%, 74% 2%, 78% 8%, 100% 8%, 100% 100%, 0px 100%)" }} className="hidden lg:flex flex-col absolute top-[48px] drop-shadow-lg rounded-lg right-[8.2rem] w-[500px] h-50 bg-dropdownbgColor pt-[3rem] pl-8 h-[400px]">

            <div className="scroll-m-0.5 overflow-y-auto flex flex-col gap-5 h-[330px] pr-8">

                {/* SEARCH */}
                <div className="hidden lg:flex items-center p-2 gap-2 overflow-hidden border-2 border-gray-600 mt-2 rounded-lg w-full py-4 h-11 ">
                    <BiSearch className="text-gray-600 text-xl cursor-pointer" />

                    <input type="text" className="outline-none bg-transparent text-gray-800 text-sm w-full placeholder-gray-700" placeholder="Search messages" />

                </div>

                {/* MESSAGES */}
                {/* FIRST */}
                <Messages />
                {/* SECOND */}
                <Messages />
                {/* THIRD */}
                <Messages />


            </div>
        </motion.div>
    );
};

export default MenuPostMessages;