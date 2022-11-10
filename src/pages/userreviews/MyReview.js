import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Helmet } from "react-helmet";
import ReviewCard from './ReviewCard';

const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://golpo-photography-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    fetch(`https://golpo-photography-server.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));

    return (
        <div>
            <Helmet>
                <title>Golpo | My Reviews</title>
            </Helmet>
            {
                reviews.length > 0 ?
                    <>
                        <div className='grid grid-cols-3 gap-5 w-5/6 mx-auto'>
                            {
                                reviews.map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewCard>)
                            }
                        </div>
                    </>
                    :
                    <>
                        <h1 className='text-5xl text-center pt-40'>No Reviews Added</h1>
                    </>
            }
        </div>
    );
};

export default MyReview;