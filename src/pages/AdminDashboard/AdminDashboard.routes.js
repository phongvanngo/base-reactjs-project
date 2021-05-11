import React, { lazy } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminRoutes } from 'routes.const';

const MovieManagement = lazy(() => import('./MovieManagement/MovieManagement'));
const TheaterManagement = lazy(() => import('./TheaterManagement/TheaterManagement'));
const TheaterSystemManagement = lazy(() => import('./TheaterManagement/TheaterSystemManagement'));
const ShowTimeManagement = lazy(() => import('./ShowTimeManagement/ShowTimeManagement'));
const AdminIntroduction = lazy(() => import('./AdminIntroduction/AdminIntroduction'));

const {
    MOVIE_MANAGEMENT,
    THEATER_MANAGEMENT,
    SHOWTIME_MANAGEMENT,
    INTRODUCTION,
    THEATER_SYSTEM_MANAGEMENT
} = AdminRoutes;

export default function AdminDashboardRoutes() {
    return (
        <Switch>
            <Route path={INTRODUCTION} component={AdminIntroduction} exact={true} />
            <Route path={MOVIE_MANAGEMENT} component={MovieManagement} />
            <Route path={THEATER_MANAGEMENT} component={TheaterManagement} />
            <Route path={SHOWTIME_MANAGEMENT} component={ShowTimeManagement} />
            <Route path={THEATER_SYSTEM_MANAGEMENT} component={TheaterSystemManagement} />
            <Redirect to={INTRODUCTION} />
        </Switch>
    )
}