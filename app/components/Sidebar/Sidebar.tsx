"use client";
import React, { useEffect, useState } from "react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const [drawerOpen, setDrawerOpen] = useState(isOpen);

    useEffect(() => {
        setDrawerOpen(isOpen);
    }, [isOpen]);

    return (
        <div className="drawer z-20">
            <input id="sidebar" type="checkbox" className="drawer-toggle" checked={drawerOpen} readOnly />
            <div className="drawer-side">
                <label
                    htmlFor="sidebar"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    onClick={onClose}
                ></label>
                <ul className="menu bg-gray-100 text-base-content min-h-full w-80 p-2">
                    {/* Sidebar content here */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
