import React from 'react';

const Services = () => {
    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto gap-10'>
            <div className="card w-96 glass">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='text-xl'>Price: 10000bdt</p>
                        <button className="btn btn-ghost">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='text-xl'>Price: 10000bdt</p>
                        <button className="btn btn-ghost">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='text-xl'>Price: 10000bdt</p>
                        <button className="btn btn-ghost">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;