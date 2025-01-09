import React from 'react';
import Home from '../Home/Home';
import NavBar from '../SharedComponents/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h2>Hello bd</h2>
            <Footer></Footer>
        </div>
    );
};

export default Root;