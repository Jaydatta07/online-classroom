import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">

            {/* Sidebar on Left */}
            <div className="fixed left-0 top-0 h-full">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="ml-64 w-full flex flex-col">

                {/* Top Navbar - You already have this in your project */}
                <div className="w-full bg-white shadow p-4 z-50 sticky top-0">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        Online<span className="text-gray-800">Classroom</span>
                    </h1>
                </div>


                {/* Dashboard Page Content */}
                <div className="p-6 bg-gray-100 min-h-screen">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;
