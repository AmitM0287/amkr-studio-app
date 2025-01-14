import React from "react";
import Image from "../Image/Image";

const Navbar: React.FC = () => {
    return (
        <div id="navbar" className="p-2 grid sm:grid-cols-12 bg-gray-100 items-center">
            <div className="sm:col-span-11">hello</div>
            <div className="avatar justify-self-end">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="avatar"
                    cls="w-8 rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;
