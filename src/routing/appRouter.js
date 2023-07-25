import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from "../components/App";
import Home from "../components/HomePage/Home";

class AppRouter extends Component {
    render() {
        return (

            <Router basename={"/"}>
                <App>
                    <Routes>
                        <Route path='/' exact element={<Home />} />

                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </App>
            </Router>

        );
    }
}

export default AppRouter;
