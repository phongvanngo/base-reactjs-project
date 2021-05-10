import { adminLogOut } from "app/redux/adminAuthSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AdminRoutes } from "routes.const";
import "./AdminDashboard.scss";
import AdminDashboardRoutes from "./AdminDashboard.routes";
import { combineReducers } from "redux";

export default function LandingPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(adminLogOut());
  };

  useEffect(() => {
    const linkColor = document.querySelectorAll(".sidebar__link");
    console.log(linkColor);
    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  }, []);

  const handleToggleSidebar = () => {
    const adminLayout = document.getElementById("admin-dashboard-container");
    const headerToggle = document.getElementById("header-toggle");
    headerToggle.classList.toggle("bx-x");
    adminLayout.classList.toggle("show-sidebar");
  };

  const {
    MOVIE_MANAGEMENT,
    THEATER_MANAGEMENT,
    SHOWTIME_MANAGEMENT,
  } = AdminRoutes;

  return (
    <Router>
      <div id="admin-dashboard-container" className="show-sidebar">
        <aside id="admin-sidebar">
          <header
            id="admin-sidebar__header"
            className="items-center text-admin_color_2"
          >
            <div className="brand">
              <svg
                className="transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="arcs"
              >
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
              <h1 className="font-extrabold text-2xl ml-3">Kshark Cinema</h1>
            </div>
          </header>
          <div className="menu-container">
            <div className="">
              <ul className="menu-list">
                <li className="menu-item active">
                  <div className="title">
                    <i className="bx bxs-home title__icon"></i>
                    <span className="title__name">Dashboard</span>
                    <i class="bx bx-chevron-down title__submenu-icon"></i>
                  </div>
                  <ul className="submenu-list">
                    <li>Home 1</li>
                    <li>Home 2</li>
                    <li>Home 3</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div id="admin-main">
          <header id="admin__navbar" className="px-3 flex items-center ">
            <button
              className="text-2xl focus:outline-none"
              onClick={() => {
                handleToggleSidebar();
              }}
            >
              <i className="bx bx-menu bx-x" id="header-toggle"></i>
            </button>
          </header>
          <div>
            <AdminDashboardRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}
