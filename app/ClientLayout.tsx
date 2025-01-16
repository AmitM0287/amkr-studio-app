"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <Navbar onMenuClick={toggleSidebar} />
            <main className="min-h-screen">{children}</main>
            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </>
    );
}
