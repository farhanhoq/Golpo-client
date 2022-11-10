import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
    
    const { title, img, price, description, _id } = service;

    return (
        <div>
            <div className="card w-96 glass">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure>
                            <img src={img} alt="car!" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>
                
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='text-xl'>Price: {price}</p>
                        <Link to={`/services/${_id}`}><button className="btn btn-ghost">View Details!</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;