import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { PublicRoutes } from 'routes.const'
import LandingPageRoutes from './LandingPage.routes'

const {
    CONTACT,
    ABOUT,
} = PublicRoutes;

export default function LandingPage() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={CONTACT}>CONTACT</Link>
                    </li>
                    <li>
                        <Link to={ABOUT}>ABOUT</Link>
                    </li>

                </ul>
            </div>
            <div>
                <LandingPageRoutes />
            </div>
        </Router>
    )
}
