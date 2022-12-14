import React, { Fragment, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAllPostApi, getAllPostCommentApi, getAllPostState, likePostApi, postStateReset } from '../../redux/features/post/postSlice';
import { toast } from 'react-toastify';
import PostModal from './PostModal';



const PostTile = ({ post, errors, status }: IPostState) => {
    const [showModal, setShowModal] = useState<{
        isActive: boolean;
        post?: { [props: string]: any; };
    }>({
        isActive: false
    });
    const dispatch = useAppDispatch();
    const { errors: err, likeStatus, likeMsg } = useAppSelector(getAllPostState);
    useEffect(() => {

        if (likeStatus === "success") {
            toast.success(likeMsg, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(getAllPostApi());
            dispatch(postStateReset());
        } else if (likeStatus === "failed") {
            toast.error(err, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(postStateReset());

        }

    }, [err, likeMsg, likeStatus, dispatch]);



    const likeAndUnlikePost = (id: string) => {
        dispatch(likePostApi(id));
    };

    const postDetailModal = (postItem: {
        [props: string]: any;
    }) => {
        setShowModal((prev) => ({
            ...prev,
            isActive: true,
            post: postItem
        }));
        dispatch(getAllPostCommentApi(postItem.id));

    };



    return (
        <Fragment>
            {showModal && <PostModal status={status} showModal={showModal} setShowModal={setShowModal} />}
            {post.length > 0 ? post.map((postItem) => (
                <div key={postItem?.id} className="flex flex-col pb-10">
                    <img src={postItem?.image ? postItem?.image : "/img/noimagebig.png"} className='cursor-pointer md:h-[30rem] h-[20rem] object-cover' alt="" />
                    <div className="relative flex bg-gray-600 border-b-2 border-slate-700">
                        <div className="absolute -top-5 left-5 flex items-end">
                            <img src={postItem?.owner?.profilephoto ? postItem?.owner?.profilephoto : "/img/noimage.png"} className="bg-white w-12 h-12 top-0 rounded-lg border-2 drop-shadow-lg" alt="" />

                            <div className="flex items-center justify-center">
                                <p className="text-md text-slate-300 ml-4 mr-2 font-semibold">{postItem?.owner?.username}</p>
                                <img src="icons/MAC-017.png" className="w-5 rounded-lg" alt="" />
                            </div>
                        </div>
                        <div className="pt-12 px-5 pb-4">
                            <p className="text-sm pb-5 text-slate-300 font-bold">{postItem?.sku}</p>
                            <p className="text-base text-slate-300">{postItem?.description}</p>
                        </div>

                    </div>
                    
                    <div className="relative flex lg:px-16 px-5 md:gap-7 gap-10 py-7 justify-between bg-gray-600">
                        <div onClick={() => likeAndUnlikePost(postItem?.id)} className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-003.png" className='cursor-pointer md:w-14 w-24' alt="home" />
                            <p className="text-white text-[12px]">{postItem?.likescount}</p>
                        </div>

                        <div onClick={(e) => postDetailModal(postItem)} className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-004.png" className='cursor-pointer md:w-14 w-24' alt="add" />
                            {/* <p className="text-white text-[12px]">50</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-005.png" className='cursor-pointer md:w-14 w-24' alt="logo" />

                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-006.png" className='cursor-pointer md:w-14 w-24' alt="logo" />
                            {/* <p className="text-white text-[12px]">5</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-007.png" className='cursor-pointer md:w-14 w-24' alt="logo" />
                        </div>
                    </div>
                </div>
            )) :
                <h3 className="text-white text-lg ml-4">No post created yet??????</h3>}
        </Fragment>
    );
};

export default PostTile;