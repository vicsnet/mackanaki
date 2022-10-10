import React, { Fragment, useEffect } from "react";
// import { BarLoader } from "react-spinners";
import PostTile from "../../components/post/PostTile";
import PageLayout from "../../Layouts/PageLayout";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getAllPostApi, getAllPostState } from "../../redux/features/post/postSlice";
import PostTileSkeleton from "../../components/post/PostTileSkeleton";



const Home = () => {
    // const postSkeletonCount = 4;
    // const id = useId();
    const dispatch = useAppDispatch();
    const { errors, post, status } = useAppSelector(getAllPostState);

    useEffect(() => {
        dispatch(getAllPostApi());
    }, [dispatch]);


    // const Loader = (<div className="flex justify-center my-7">
    //     <BarLoader color="#c1c1c1" />
    // </div>);
    return (
        <Fragment>
            <PageLayout>
                <div className="w-full md:w-1/2 mx-auto">
                    {/* {Array(postSkeletonCount).fill(<PostTileSkeleton key={id}/>)} */}
                    {
                        status === "loading" ? <PostTileSkeleton /> :
                            <PostTile post={post} errors={errors} status={status} />
                    }
                </div>
            </PageLayout>
        </Fragment>
    );
};

export default Home;
