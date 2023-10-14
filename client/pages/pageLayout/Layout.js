import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Home from "../Home/Home"
import { AllListings } from "../AllListings/AllListings.jsx";
import { ProductDetails } from "../ProductDetails/ProductDetails.jsx";

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
                    {/* <Route path ="" element={<Home />} /> */}
                    <Route path ="" element={<AllListings />} />
                    {/* <Route path ="" element={<ProductDetails />} /> */}
                    <Route />

                </Route>
            </Routes>
        </Router>
        </>
    )
}



export default Pages;