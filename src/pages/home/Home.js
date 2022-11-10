import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import PopularServices from './PopularServices';
import Showcase from './Showcase';

const Home = () => {
    return (
        <div>
            <About></About>
            <PopularServices></PopularServices>
            <Showcase></Showcase>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;