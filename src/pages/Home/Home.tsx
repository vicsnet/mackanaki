import React, { Fragment, useEffect } from "react";
import PostTile from "../../components/post/PostTile";
import PageLayout from "../../Layouts/PageLayout";
import { useAppDispatch } from "../../redux/app/hooks";
import { getAllPostApi } from "../../redux/features/post/postSlice";
// import PostTileSkeleton from "../../components/post/PostTileSkeleton";



const Home = () => {
    // const postSkeletonCount = 4;
    // const id = useId();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllPostApi());
    }, [dispatch]);

    return (
        <Fragment>
            <PageLayout>
                <div className="w-full md:w-1/2 mx-auto">
                    {/* {Array(postSkeletonCount).fill(<PostTileSkeleton key={id}/>)} */}
                    <PostTile />
                    <PostTile />
                    <PostTile />
                </div>
            </PageLayout>
        </Fragment>
    );
};

export default Home;
