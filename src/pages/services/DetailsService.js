import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ShowModals from "../../modals/ShowModals";
import Review from "./Review";

const DetailsService = () => {
    const { title, img, description, price, _id } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const { user } = useContext(AuthContext);

    const handleReview = e => {
        const form = e.target;
        const name = form.cname.value;
        const email = user?.email || "Not Found";
        const message = form.message.value;

        const review = {
            reviewID: _id,
            cName: name,
            email,
            message,
            sName: title,
            sImg: img
        }

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                alert("Review Done");
                form.reset();
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className="grid grid-cols-6 gap-6">

            <div className="col-span-4">
                <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
                                    <div className="flex">
                                        <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/2" alt=""/>
                                        <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/2" alt=""/>
                                    </div>
                                    <div className="flex">
                                        <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/3" alt=""/>
                                        <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/3" alt=""/>
                                        <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/3" alt=""/>
                                    </div>
                                </div>
                                <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{description}</p>
                                <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-2">
                <p className="text-center text-4xl my-5">Reviews</p>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
                <div className="flex justify-center mt-6">
                    <label htmlFor="my-modal-3" className="btn btn-ghost">Give Review</label>

                    <ShowModals handleReview={handleReview}></ShowModals>
                </div>
            </div>

        </div>
    );
};

export default DetailsService;
