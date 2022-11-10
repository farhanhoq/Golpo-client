import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import EditReview from './EditReview';
import ReviewCard from './ReviewCard';

const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));

    return (
        <div className='grid grid-cols-3 gap-5 w-5/6 mx-auto'>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></ReviewCard>)
            }
        </div>
    );
};

export default MyReview;