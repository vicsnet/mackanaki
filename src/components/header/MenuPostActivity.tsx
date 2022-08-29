import { AiFillStar } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';


const MenuPostActivity = () => {
    return (
        <div style={{ clipPath: "polygon(0px 8%, 70% 8%, 74% 2%, 78% 8%, 100% 8%, 100% 100%, 0px 100%)" }} className="hidden lg:flex flex-col absolute top-[48px] drop-shadow-lg rounded-lg right-[12.3rem] w-[500px] h-50 bg-dropdownbgColor pt-[3rem] pl-8 h-[400px]">

            <div className="scroll-m-0.5 overflow-y-auto flex flex-col gap-5 h-[330px] pr-8">

                {/* TODAY */}
                <p className="text-sm font-semibold">Today</p>

                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <FaUserCircle className="text-stone-800 text-4xl" />
                        <p className="text-[13px]"><span className="font-semibold">Fundamental02</span>{' '} likes your post</p>
                        <p className="text-[13px]">20h</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className='cursor-pointer rounded w-10 h-10' alt="logo" />
                    </div>
                </div>
                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <FaUserCircle className="text-stone-800 text-4xl" />
                        <p className="text-[13px]"><span className="font-semibold">Fundamental02</span>{' '} started following you</p>

                    </div>
                    <div className="flex items-center gap-5">
                        <button className='cursor-pointer text-[12px] text-white bg-primaryColor px-5 py-[2px] hover:bg-sky-700 w-24'>Follow</button>
                    </div>
                </div>
                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <FaUserCircle className="text-stone-800 text-4xl" />
                        <p className="text-[13px]"><span className="font-semibold">Fundamental02</span>{' '} started following you</p>

                    </div>
                    <div className="flex items-center gap-5">
                        <button className='cursor-pointer border border-slate-500 text-[12px] bg-transparent px-5 py-[2px] w-24'>Following</button>
                    </div>
                </div>


                <hr className='border-1 border-gray-500' />


                {/* YESTERDAY */}
                <p className="text-sm font-semibold">Yesterday</p>

                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <FaUserCircle className="text-stone-800 text-4xl" />
                        <p className="text-[13px]"><span className="font-semibold">Viktoh Ed</span>{' '} started following you</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className='cursor-pointer text-[12px] text-white bg-primaryColor px-5 py-[2px] hover:bg-sky-700 w-24'>Follow</button>
                    </div>
                </div>
                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-5">
                        <FaUserCircle className="text-stone-800 text-4xl" />
                        <p className="text-[13px]"><span className="font-semibold">Vectorcloud</span>{' '} sent you stars</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className='cursor-pointer border text-primaryColor border-slate-500 text-[15px] bg-transparent px-2 py-[2px] w-24'>
                            <div className='flex gap-1'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MenuPostActivity;