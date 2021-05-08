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
            <Navbar />
            <Dropdown />
            <div>
                <div>
                    <button onClick={() => { handleLogout() }}>logout</button>
                </div>
            </div>
            <div>
                <AdminDashboardRoutes />
            </div>
        </Router>
    )
}
