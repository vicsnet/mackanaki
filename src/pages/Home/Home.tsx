import React, { Fragment } from "react";
import PostTile from "../../components/post/PostTile";
import PageLayout from "../../Layouts/PageLayout";



const Home = () => {


    return (
        <Fragment>
            <PageLayout>

                <div className="w-full md:w-1/2 mx-auto">
                    <PostTile />
                    <PostTile />
                    <PostTile />
                </div>

            </PageLayout>
        </Fragment>
    );
};

export default Home;
