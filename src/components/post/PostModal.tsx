import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import VideoModel from './VideoModel';


type showModalTypes = {
  showModal: {
    isActive: boolean;
    post?: {
      [props: string]: any;
    };
  };
  setShowModal: React.Dispatch<React.SetStateAction<{
    isActive: boolean;
    post?: {
      [props: string]: string;
    };
  }>>;
  status: "idle" | "loading" | "success" | "failed";
};




const PostModal = ({ showModal, setShowModal }: showModalTypes) => {
  const { isActive, post } = showModal;
  const [showVideo, setShowVideo] = React.useState<{
    isActive: boolean;
    video: string | null;
  }>({
    isActive: false,
    video: null
  });
  return (
    <>
      {showVideo.isActive && <VideoModel showVideo={showVideo} setShowVideo={setShowVideo} />}
      {isActive && (
        <>
          <div
            className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bgDarkColor outline-none focus:outline-none pb-10">
                {/*header*/}
                <div className="flex justify-end px-7 py-5">
                  <MdOutlineClose onClick={() => setShowModal((prev) => ({ ...prev, isActive: false }))} className=' cursor-pointer text-navTextDarkColor text-3xl' />
                </div>
                <div className="flex flex-col">
                  {!post?.video ?
                    <motion.div onClick={() => setShowVideo((prev) => ({
                      ...prev,
                      isActive: true,
                      video: post?.video
                    }))} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.5 }} className="flex md:h-[30rem] h-[20rem] justify-center items-center">
                      <img src={!post?.image ? post?.image : "/icons/play-button.png"} className='cursor-pointer h-20' alt="" />
                    </motion.div>
                    :
                    <img src={post?.image ? post?.image : "/img/noimagebig.png"} className='cursor-pointer md:h-[30rem] h-[20rem] object-cover' alt="" />
                  }

                  <div className="flex items-center mt-4 ml-4">
                    <img src={post?.owner?.profilephoto ? post?.owner?.profilephoto : "/img/noimage.png"} className="bg-white w-12 h-12 top-0 rounded-full border-2 drop-shadow-lg" alt="" />
                    <div className="flex items-center justify-center">
                      <p className="text-md text-slate-300 ml-4 mr-2 font-semibold">{post?.owner?.username}</p>
                      <img src="icons/MAC-017.png" className="w-5 rounded-lg" alt="" />
                    </div>
                  </div>
                  <div className="pt-7 px-5 pb-4">
                    <p className="text-sm pb-5 text-slate-300 font-bold">{post?.sku}</p>
                    <p className="text-base text-slate-300">{post?.description}</p>
                  </div>

                  <form className="w-full rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <h2 className="px-4 pt-3 pb-2 text-white text-lg">Add a new comment</h2>
                      <div className="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea className="p-4 w-full bg-transparent border border-gray-500 rounded-md outline-none px-5 text-navTextDarkColor md:text-sm text-xs " name="body" rows={7} placeholder='Type Your Comment' required></textarea>
                        <button className="first-letter:mt-7 cursor-pointer md:text-[14px] text-[12px] md:px-10 md:py-[10px] px-5 py-[7px] mt-4 text-white bg-primaryColor">
                          Post comment
                        </button>
                      </div>

                    </div>
                  </form>

                  <div className="antialiased px-4">
                    <h3 className="mb-4 text-lg font-semibold text-white">2 Comments</h3>

                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/icons/user.png" alt="" />
                        </div>
                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                          <strong className="text-white">Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                          <p className="text-sm text-gray-300">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                          </p>

                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="/icons/user.png" alt="" />
                        </div>
                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                          <strong className="text-white">Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                          <p className="text-sm text-gray-300">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                          </p>

                        </div>
                      </div>


                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default PostModal;;