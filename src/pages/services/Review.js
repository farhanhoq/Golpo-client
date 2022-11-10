import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Review = ({ review }) => {
    
    const { _id, reviewID, cName, email, message } = review;

    return (
        <div>

                <div>
                <div className="cardshadow-xl flex flex-row items-center my-2">
                    
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </div>
                        
                    <div className="card-body">
                        <h2 className="card-title text-lg">{message}</h2>
                        <p className='text-sm'>by {cName}</p>
                    </div>
                </div>
                </div>

                
        </div>
    );
};

export default Review;