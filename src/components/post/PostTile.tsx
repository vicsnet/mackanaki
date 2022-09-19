import React, { Fragment } from 'react';
import { motion } from "framer-motion";



const PostTile = () => {
    
    return (
        <Fragment>
            <div className="flex flex-col pb-10">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className='cursor-pointer md:h-[30rem] h-[20rem] object-cover' alt="" />
                <div className="relative flex bg-gray-600 border-b-2 border-slate-700">
                    <div className="absolute -top-10 left-5 flex items-end">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="bg-white w-24 h-24 top-0 rounded-lg border-2 drop-shadow-lg" alt="" />
                        <p className="text-sm text-slate-300 ml-4 mr-2 pb-4 font-semibold">ThrombrixNFT</p>
                        <img src="icons/MAC-017.png" className="w-5 pb-4 rounded-lg" alt="" />
                    </div>
                    <div className="pt-20 px-5 pb-4">
                        <p className="text-base text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea commodi consectetur ex quas, aliquid laudantium amet voluptates vitae. Mollitia officiis repellendus aliquam eos eveniet dignissimos laudantium, id ratione repellat...</p>
                        <p className="text-base font-semibold text-slate-100 mt-2">+ more</p>
                    </div>
                </div>
                <div className="relative flex gap-7 py-5 justify-center bg-gray-600">

                    <div className="flex flex-col items-center gap-2">
                        <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-003.png" className='cursor-pointer w-[50px] h-[50px]' alt="home" />
                        <p className="text-white text-[12px]">20</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-004.png" className='cursor-pointer w-12 h-12' alt="add" />
                        <p className="text-white text-[12px]">50</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-005.png" className='cursor-pointer w-12 h-12' alt="logo" />
                        <p className="text-white text-[12px]">100</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-006.png" className='cursor-pointer w-12 h-12' alt="logo" />
                        <p className="text-white text-[12px]">5</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-007.png" className='cursor-pointer w-12 h-12' alt="logo" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PostTile;