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
            <div className="avatar dropdown dropdown-end col-span-1 sm:col-span-1 justify-self-end">
                <div className="avatar" role="button" tabIndex={0}>
                    <Image
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="avatar"
                        cls="w-8 rounded-full cursor-pointer"
                    />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-gray-100 rounded-box z-[1] w-52 mt-4 p-2 shadow">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
