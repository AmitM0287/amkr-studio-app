import React from "react";
import Image from "../Image/Image";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
    onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
    return (
        <div
            id="navbar"
            className="py-2 px-3 grid grid-cols-12 sm:grid-cols-12 bg-gray-100 items-center shadow sticky top-0 z-10"
        >
            <MenuIcon className="col-span-11 sm:col-span-11 text-gray-500 cursor-pointer" onClick={onMenuClick} />
            <div className="avatar justify-self-end">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="avatar"
                    cls="w-8 rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Navbar;
