import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

function Logout () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());

        navigate("/login");
    }

    return (
        <button 
        onClick={handleLogout}
        className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition'>
            Logout
        </button>
    );
};

export default Logout;