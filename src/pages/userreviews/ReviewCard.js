import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review,handleDelete }) => {
    
    const { reviewID, cName, message, sImg, sName, _id } = review;
    
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
            <img src={sImg} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{sName}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <Link to="/editreview" className="btn btn-outline">Edit</Link>
                    <Link onClick={() => handleDelete(_id)} className="badge badge-outline">Delete</Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;