import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import MenuPostActivity from './MenuPostActivity';
import MenuPostMessages from './MenuPostMessages';
import SideBarMenu from './SideBarMenu';

const Header = () => {
    const [showmenu, setShowmenu] = useState(false);
    const [showActivityDropdown, setActivityShowdropdown] = useState(false);
    const [showMessagesDropdown, setMessagesShowdropdown] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const openActivityMenu = () => {
        setActivityShowdropdown(!showActivityDropdown);
        setMessagesShowdropdown(false);
    };
    const openMessgageMenu = () => {
        setMessagesShowdropdown(!showMessagesDropdown);
        setActivityShowdropdown(false);
    };

    const showSideMenu = () => {
        setShowmenu(!showmenu)
        setShowSearch(false)
    };

    return (
        <nav className="w-screen fixed top-0 z-10 bg-navbarDarkColor drop-shadow-lg">
            <div className='mx-auto px-10 h-20 flex justify-between items-center relative'>
                <div className="flex-1 w-full flex gap-10 items-center">
                    <Link to="/">
                        <img src="/icons/logo.png" className='w-40' alt="logo" />
                    </Link>
                    <div className="hidden lg:flex items-center p-2 gap-2 overflow-hidden border-2 border-gray-500 rounded-lg w-1/2 py-4 h-11 ">
                        <BiSearch className="text-navTextDarkColor text-xl cursor-pointer" />

                        <input type="text" className="outline-none bg-transparent text-navTextDarkColor text-sm w-full" placeholder="Search items, collections and accounts" />

                    </div>
                </div>
                <div className="hidden lg:flex gap-10">
                    <Link to='/'>
                        <img src="/icons/home.png" className='cursor-pointer w-7 h-7' alt="home" />
                    </Link>

                    <Link to="/post/create">
                        <img src="/icons/add.png" className='cursor-pointer w-7 h-7' alt="add" />
                    </Link>

                    <img src="/icons/heart.png" onClick={openActivityMenu} className='cursor-pointer w-7 h-7' alt="heart" />


                    <AiOutlineMessage onClick={openMessgageMenu} className="cursor-pointer  text-navTextDarkColor text-3xl" />


                    <Link to="/profile">
                        <img src="/icons/users.png" className='cursor-pointer w-7 h-7' alt="logo" />
                    </Link>

                    <Link to="/profile/patrick">
                        <img src="/icons/user.png" className='cursor-pointer w-7 h-7' alt="logo" />
                    </Link>

                    <Link to="/profile/wallet">
                        <img src="/icons/wallet.png" className='cursor-pointer w-7 h-7' alt="logo" />
                    </Link>
                </div>
                <div className="lg:hidden flex items-center gap-10">
                    {showSearch ? <MdOutlineClose onClick={() => setShowSearch(!showSearch)} className=' cursor-pointer text-navTextDarkColor text-3xl' /> : <BiSearch onClick={() => setShowSearch(!showSearch)} className="cursor-pointer  text-navTextDarkColor text-3xl" />}

                    {showmenu ? <MdOutlineClose onClick={showSideMenu} className=' cursor-pointer text-navTextDarkColor text-3xl' /> : <img onClick={showSideMenu} src="/icons/hamburger.png" className='cursor-pointer w-[30px] h-[20px]' alt="logo" />}

                </div>


                {/* SIDEBAR */}
                {showmenu && <SideBarMenu setShowmenu={setShowmenu} showmenu={showmenu} />}


                {/* DROP DOWN MENU POST ACTIVITIES */}
                {showActivityDropdown && <MenuPostActivity />
                }

                {/* DROP DOWN MENU MESSAGES */}
                {showMessagesDropdown && <MenuPostMessages />}

            </div>
            {showSearch &&
                <div className="absolute top-24 bg-slate-800 mx-auto shadow-2xl p-5 w-full">
                    <div className="flex items-center p-2 gap-2 overflow-hidden rounded-lg w-full py-4 h-11 ">
                        <input type="text" className="outline-none bg-transparent text-navTextDarkColor text-sm w-full" placeholder="Search items, collections and accounts" />
                        <div className="bg-primaryColor cursor-pointer p-2 rounded-full">
                            <BiSearch className="text-white text-2xl" />
                        </div>
                    </div>
                </div>
            }

        </nav>
    );
};

export default Header;