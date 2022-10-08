import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

type showVideoTypes = {
    showVideo: {
        isActive: boolean;
        video: string | null;
    };

    setShowVideo: React.Dispatch<React.SetStateAction<{
        isActive: boolean;
        video: string | null;
    }>>;
};



const VideoModel = ({ showVideo, setShowVideo }: showVideoTypes) => {
    const { isActive, video } = showVideo;
    return (
        <>
            {isActive && (
                <>
                    <div
                        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[55] outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bgDarkColor outline-none focus:outline-none pb-10">
                                {/*header*/}
                                <div className="flex justify-end px-7 py-5">
                                    <MdOutlineClose onClick={() => setShowVideo((prev) => ({
                                        ...prev,
                                        isActive: false
                                    }))} className=' cursor-pointer text-navTextDarkColor text-3xl' />
                                </div>
                                <div className="flex flex-col">
                                    <iframe
                                        className='md:h-[30rem] h-[20rem]'
                                        src={`https://www.youtube.com/embed/NSk0fXWBGc4`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="opacity-7 fixed inset-0 z-[52] bg-black"></div>
                </>
            )}
        </>
    );
};

export default VideoModel;