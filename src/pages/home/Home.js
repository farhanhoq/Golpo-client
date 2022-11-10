import React from 'react';
import { Helmet } from "react-helmet";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import PopularServices from './PopularServices';
import Showcase from './Showcase';
import UserAddedService from './UserAddedService';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Golpo | Home</title>
            </Helmet>
            <About></About>
            <PopularServices></PopularServices>
            <UserAddedService></UserAddedService>
            <Showcase></Showcase>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;