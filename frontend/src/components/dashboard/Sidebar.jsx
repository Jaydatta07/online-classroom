import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-semibold mb-14">Dashboard</h2>

      <nav className="flex flex-col gap-4 text-lg">
        <Link to="/dashboard/home" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/dashboard/stream" className="hover:text-gray-300">
          Video Streaming
        </Link>

        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>

        <Link to="/logout" className="hover:text-gray-300">
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
