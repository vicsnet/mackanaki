import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const MobileMenuLink = ({ setShowmenu, name, children, onclick }: { setShowmenu: Function; name: string; children: React.ReactNode; onclick?: React.MouseEventHandler<HTMLDivElement>; }) => {
    return (

        <div onClick={onclick} className="flex text-white font-bold items-center justify-between">
            <div className="flex gap-3 items-center">
                {children}
                <p onClick={() => setShowmenu(false)} className="md:text-lg text-md">{name}</p>
            </div>
            <FiChevronRight className="md:text-[30px] text-[25px]" />
        </div>
    );
};

export default MobileMenuLink;