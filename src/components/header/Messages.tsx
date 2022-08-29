import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Messages = () => {
    return (
        <div className="flex gap-5 cursor-pointer">
            <FaUserCircle className="text-stone-800 text-4xl" />
            <div className="flex flex-col gap-1">
                <p className="text-[13px]"><span className="font-semibold">Fundamental02</span></p>
                <div className="flex justify-between gap-8">
                    <p className="text-[13px] text-slate-800 w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a voluptatem obcaecati, rem vel numquam facere alias quos, fugit ipsa iste, incidunt assumenda minima! Dolores optio quibusdam beatae quaerat animi?</p>
                    <p className="text-[13px] text-slate-800">20min</p>
                </div>
            </div>
        </div>
    );
};

export default Messages;