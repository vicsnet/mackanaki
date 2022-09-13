import React, { Fragment, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { MdLogout, MdPayment, MdStar } from 'react-icons/md';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layouts/PageLayout';

const Wallet = () => {
    const [showdropDown, setshowDropDown] = useState(false);
    return (
        <Fragment>
            <PageLayout paddingTop='mt-32'>


                <div className='py-7 px-7 border border-gray-500 lg:w-1/3 md:w-1/2 mx-auto'>
                    <div className="flex items-center gap-3 mb-5">
                        <img src="/icons/image.png" className='transition ease-in-out duration-400 hover:scale-110 rounded-full border cursor-pointer w-10 h-10' alt="profile" />
                        <div onClick={() => setshowDropDown(!showdropDown)} className="relative cursor-pointer flex gap-1">
                            <p className="cursor-pointer md:text-md text-sm text-navTextDarkColor">Thrombrixproject</p>

                            {showdropDown ? <RiArrowUpSLine className="cursor-pointer  text-navTextDarkColor text-2xl" /> : <RiArrowDownSLine className="cursor-pointer  text-navTextDarkColor text-2xl" />}

                            {showdropDown && <div className="absolute top-8 flex flex-col rounded-lg bg-secondaryColor w-52">
                                <div className="flex items-center text-gray-400 cursor-pointer border-b border-navbarDarkColor gap-3 px-4 py-3">
                                    <BiRefresh className="text-[20px]" />
                                    <p className="text-sm">Refresh fund</p>
                                </div>
                                <div className="flex items-center text-gray-400 cursor-pointer border-b border-navbarDarkColor gap-3 px-4 py-3">
                                    <MdPayment className="text-[20px]" />
                                    <p className="text-sm">Payment Setting</p>
                                </div>
                                <Link to="/">
                                    <div className="flex items-center text-gray-400 cursor-pointer border-b border-navbarDarkColor gap-3 px-4 py-3">
                                        <MdLogout className="text-[20px]" />
                                        <p className="text-sm">Log out</p>
                                    </div>
                                </Link>
                            </div>}

                        </div>
                    </div>

                    <div className="flex justify-between flex-col w-52 mx-auto rounded-lg mb-5">
                        <div className="flex flex-col gap-2 items-center my-3">
                            <p className="text-xs text-gray-500">Wallet balance</p>
                            <p className="text-md text-navTextDarkColor">$400.00 USD</p>
                        </div>
                        <div className="cursor-pointer flex justify-center items-center text-navTextDarkColor text-sm bg-primaryColor rounded-b-lg h-10">
                            Add Funds
                        </div>
                    </div>

                    <div className="mb-5 flex justify-between border border-gray-500 px-5 py-3 rounded-b-2xl">
                        <div className="flex justify-between flex-col">
                            <div className="flex items-center gap-2">
                                <Link to="/">
                                    <img src="/icons/shortlogo.png" alt="shortlogo" className="w-7 mb-2" />
                                </Link>
                                <p className="text-xs text-gray-500">Star Balance</p>
                            </div>
                        </div>
                        <div className="flex gap-7 justify-between flex-col w-52 rounded-lg">
                            <div className="flex gap-2 justify-end items-center my-3">
                                <MdStar className="text-primaryColor" />
                                <p className="md:text-md text-xs text-navTextDarkColor">10000</p>
                            </div>
                            <div className="cursor-pointer flex justify-center items-center text-navTextDarkColor text-xs bg-primaryColor rounded-b-lg h-8">
                                Recharge
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between border border-gray-500 px-5 py-3 rounded-b-2xl">
                        <div className="flex justify-between flex-col">
                            <div className="flex items-center gap-2">
                                <Link to="/">
                                    <img src="/icons/shortlogo.png" alt="shortlogo" className="w-7 mb-2" />
                                </Link>
                                <p className="text-xs text-gray-500">Gift Revenue</p>
                            </div>
                        </div>
                        <div className="flex gap-7 justify-between flex-col w-52 rounded-lg">
                            <div className="flex gap-2 justify-end items-center my-3">
                                <p className="md:text-md text-xs text-navTextDarkColor">$10.00</p>
                            </div>
                            <div className="cursor-pointer flex justify-center items-center text-navTextDarkColor text-xs bg-primaryColor rounded-b-lg h-8">
                                Withdraw Funds
                            </div>
                        </div>
                    </div>

                </div>


            </PageLayout>
        </Fragment>
    );
};

export default Wallet;