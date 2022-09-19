import React, { Fragment } from "react";
import PostTile from "../../components/post/PostTile";
import PageLayout from "../../Layouts/PageLayout";
import PostTileSkeleton from "../../components/post/PostTileSkeleton";



const Home = () => {
    const postSkeletonCount = 1;

    return (
        <Fragment>
            <PageLayout>
                <div className="w-full md:w-1/2 mx-auto">
                    {Array(postSkeletonCount).fill(<PostTileSkeleton />)}
                    <PostTile />
                    <PostTile />
                    <PostTile />
                </div>
            </PageLayout>
        </Fragment>
    );
};

export default Home;
