import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PostTileSkeleton = () => {

    return (
        <SkeletonTheme baseColor="#353841" highlightColor="#54565d">

            <div className="flex flex-col pb-10 gap-1">
                <Skeleton className='md:h-[30rem] h-[20rem]' />

                <Skeleton className="h-32" />

                <Skeleton className='h-20' />
            </div>
        </SkeletonTheme>
    );
};

export default PostTileSkeleton;