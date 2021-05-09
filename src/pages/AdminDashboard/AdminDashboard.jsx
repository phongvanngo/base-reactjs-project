import { adminLogOut } from 'app/redux/adminAuthSlice';
import Dropdown from 'pages/LandingPage/Dropdown';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboardRoutes from './AdminDashboard.routes';
import Navbar from './Navbar';
import "./AdminDashboard.scss";

export default function LandingPage() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(adminLogOut());
    }

    const handleToggleSidebar = () => {
        const adminLayout = document.getElementById("admin-dashboard-container");
        const test = document.getElementById("demo");
        test.classList.toggle("show");
        adminLayout.classList.toggle("show-sidebar");
    }

    return (
        <Router>
            <div id="admin-dashboard-container" className="admin-dashboard-container show-sidebar">
                <aside className="admin-sidebar">left</aside>
                <div className="admin-main">
                    <div>
                        <button onClick={() => { handleToggleSidebar() }}>thu gon</button>
                    </div>
                    <div className="bg-red-500 w-10 h-5" id="demo">hi</div>
                </div>
            </div>
        </Router>
    )
}
