import React from 'react';

const ServiceCard = ({ service }) => {
    
    const { title, img, price, description } = service;

    return (
        <div >
            <div className="card w-96 glass">
                <figure>
                    <img src={img} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='text-xl'>Price: {price}</p>
                        <button className="btn btn-ghost">Book now!</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;