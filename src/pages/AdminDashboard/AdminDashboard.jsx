import { adminLogOut } from 'app/redux/adminAuthSlice';
import Dropdown from 'pages/LandingPage/Dropdown';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboardRoutes from './AdminDashboard.routes';
import Navbar from './Navbar';
import "./AdminDashboard.scss";
import UserAvatar from 'assets/image/user.png';

export default function LandingPage() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(adminLogOut());
    }

    const handleToggleSidebar = () => {
        const adminLayout = document.getElementById("admin-dashboard-container");
        adminLayout.classList.toggle("show-sidebar");
    }

    return (
        <Router>
            <div id="admin-dashboard-container" className="show-sidebar">
                <aside id="admin-sidebar" className="overflow-hidden fixed pb-7 px-3 bg-gray-100 border-r border-gray-300">
                    <div className="overflow-hidden px-1 space-y-2 h-full flex flex-col justify-between">
                        <div className="menu-list">
                            <section className="flex items-center py-2">
                                <div className="text-4xl">
                                    <i class='bx bx-certification' ></i>
                                </div>
                                <div className="ml-3">
                                    <h1 className="text-lg font-bold whitespace-nowrap">SHARK CINEMA</h1>
                                    {/* <h1 className="text-gray-600">Adminitrator</h1> */}
                                </div>
                            </section>
                            <div className="mt-5 px-2 flex flex-col space-y-5">
                                <li class="h-8 flex items-center cursor-pointer">
                                    <svg
                                        width="18"
                                        height="18"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className=" text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                    </svg>
                                    <h4 className="font-medium text-gray-600 ml-5">Movie </h4>
                                </li>
                                <li class="h-8 flex items-center cursor-pointer">
                                    <svg
                                        width="18"
                                        height="18"
                                        stroke-width="2"
                                        className=" text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>
                                    <h4 className="font-medium text-gray-600 ml-5">Theater </h4>
                                </li>
                                <li class="h-8 flex items-center cursor-pointer">
                                    <svg
                                        width="18"
                                        height="18"
                                        stroke-width="2"
                                        className=" text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <h4 className="font-medium text-gray-600 ml-5">Showtime </h4>
                                </li>
                            </div>
                        </div>
                        <div class="menu-list px-2 h-8 flex items-center cursor-pointer ">
                            <svg
                                width="18"
                                height="18"
                                stroke-width="2"
                                className=" text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLdivecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <h4 className="font-medium text-gray-600 ml-5">Logout </h4>
                        </div>
                    </div>

                </aside>
                <div id="admin-main">
                    <header className="flex items-center h-12 border-b">
                        <button onClick={() => { handleToggleSidebar() }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18" height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </header>
                </div>
            </div>
        </Router>
    )
}
