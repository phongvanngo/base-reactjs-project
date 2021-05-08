import { adminLogOut } from 'app/redux/adminAuthSlice';
import Dropdown from 'pages/LandingPage/Dropdown';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboardRoutes from './AdminDashboard.routes';
import Navbar from './Navbar';

export default function LandingPage() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(adminLogOut());
    }
    return (
        <Router>
            <div className="grid gap-5 grid-cols-12">
                <aside className="col-span-2">left</aside>
                <div className="col-span-10">right </div>
            </div>
        </Router>
    )
}
