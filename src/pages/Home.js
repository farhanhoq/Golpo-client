import React from 'react';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl text-center font-bold my-3'>Packages We Offer</h2>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;