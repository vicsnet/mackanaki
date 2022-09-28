import React, { Fragment, useState } from 'react';
import { motion } from "framer-motion";
import { useAppDispatch } from '../../redux/app/hooks';
import { likePost, unLikePost } from '../../redux/features/post/postSlice';



const PostTile = ({ post, errors }: IPostState) => {
    const [hasLikedPost, setHasLikedPost] = useState(false);
    const dispatch = useAppDispatch();
    // const { liked, errors: err } = useAppSelector(getAllPostState);


    const likeAndUnlikePost = (id: string) => {
        setHasLikedPost(!hasLikedPost);
        if (hasLikedPost) {
            // dispatch(unlikePostApi(id));
            dispatch(unLikePost(id));
        } else {
            dispatch(likePost(id));

        }
    };
    return (
        <Fragment>
            {post.length > 0 ? post.map((postItem) => (
                <div key={postItem?.id} className="flex flex-col pb-10">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className='cursor-pointer md:h-[30rem] h-[20rem] object-cover' alt="" />
                    <div className="relative flex bg-gray-600 border-b-2 border-slate-700">
                        <div className="absolute -top-5 left-5 flex items-end">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="bg-white w-12 h-12 top-0 rounded-lg border-2 drop-shadow-lg" alt="" />
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
                    <div className="relative flex gap-7 py-5 justify-center bg-gray-600">
                        <div onClick={() => likeAndUnlikePost(postItem?.id)} className="flex flex-col items-center gap-2">
                            <motion.img whileTap={{ scale: 0.5 }} src="icons/MAC-003.png" className='cursor-pointer w-[50px] h-[50px]' alt="home" />
                            <p className="text-white text-[12px]">{postItem?.likescount}</p>
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
            )) :
                <h3 className="text-white text-lg ml-4">No post created yet☹️</h3>}
        </Fragment>
    );
};

export default PostTile;