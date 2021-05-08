import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { AdminRoutes } from 'routes.const'
import AdminDashboardRoutes from './AdminDashboard.routes'
import { adminLogOut } from 'app/redux/adminAuthSlice';

const {
    MOVIE_MANAGEMENT,
    SHOWTIME_MANAGEMENT,
    THEATER_MANAGEMENT,
} = AdminRoutes;

export default function LandingPage() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(adminLogOut());
    }
    return (
        <Router>
            <div style={{ background: "gainsboro", marginTop: "0px" }}>
                <ul style={{ marginTop: '0px' }}>
                    <li>
                        <Link to={THEATER_MANAGEMENT}>THEATER MANAGEMENT</Link>
                    </li>
                    <li>
                        <Link to={MOVIE_MANAGEMENT}>MOVIE MANAGEMENT</Link>
                    </li>
                    <li>
                        <Link to={SHOWTIME_MANAGEMENT}>SHOW TIME MANAGEMENT</Link>
                    </li>
                </ul>
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
