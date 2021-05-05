export const PublicRoutes = {
    LANDINGPAGE: "/",
    HOMPAGE: "/home",
    CONTACT: "/contact",
    ABOUT: "/about",

    ADMIN_DASHBOARD: "/admin",
    ADMIN_SIGNIN: "/admin-sign-in",
    USER_DASHBOARD: "/user",
    USER_SIGNIN: "/user-sign-in",

}

export const AdminDashboardRoutes = {
    MOVIE_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/movie-management`,
    THEATER_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/theater-management`,
    SHOWTIME_MANAGEMENT: `${PublicRoutes.ADMIN_DASHBOARD}/showtime-management`,
}

export const UserDashboardRoutes = {
    ABOUT_ME: `${PublicRoutes.USER_DASHBOARD}/about-me`,
    MY_ACTIVITY: `${PublicRoutes.USER_DASHBOARD}/my-activity`,
    MY_SETTINGS: `${PublicRoutes.USER_DASHBOARD}/my-activity`,
}