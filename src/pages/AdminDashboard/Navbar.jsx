import React from 'react'
import { Link } from 'react-router-dom'
import { AdminRoutes } from 'routes.const'

const { MOVIE_MANAGEMENT, THEATER_MANAGEMENT, SHOWTIME_MANAGEMENT } = AdminRoutes

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
            <div className="pl-8">
                SHARK CINEMA
            </div>
            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to={MOVIE_MANAGEMENT}>Quản lý phim</Link>
                <Link className="p-4" to={SHOWTIME_MANAGEMENT}>Quản lý suất chiếu</Link>
                <Link className="p-4" to={THEATER_MANAGEMENT}>Quản lý rạp chiếu</Link>
            </div>
        </nav>
    )
}
