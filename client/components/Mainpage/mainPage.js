import React from 'react';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


const MainPage = () => (
    <div className="container-fluid">
        <HomeNavbar />
        <Header />
        <Content />
        <Footer />
    </div>
);

export default MainPage;
