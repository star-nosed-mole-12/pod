import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Home from "../Home/Home"
import Login from "../SignInUp/Login";
import SignUp from "../SignInUp/SignUp";

const Pages = () => {

    const Page = () => {
        return (
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        )
    }


    return (
        <>
        <Router>
            <Routes>

                <Route path="/" element={<Page />}>
                    <Route path ="" element={<Home />} />
                    <Route />
                    <Route />
                </Route>
            </Routes>
            <Routes>
                    <Route path ='/login' element={<Login/>}/>
                    <Route path ='/signup' element={<SignUp/>}/>
                </Routes>
        </Router>
        </>
    )
}



export default Pages;