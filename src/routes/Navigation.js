import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from "../helpers/history";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import RouteGuard from "./RouteGuard";
import Voyages from "../pages/Voyages";
import Participation from "../pages/Participation";
import Blog from "../pages/Blog";

export default function Navigation() {
    return (
        <>
            <BrowserRouter history={history}>
                <Routes>
                    <Route path='/login' element={<Login />} />

                    <Route path='/' element={<RouteGuard />} >
                        <Route path='' element={<Home />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='voyages' element={<Voyages />} />
                        <Route path="participation" element={<Participation />} />
                        <Route path="blog" element={<Blog />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}