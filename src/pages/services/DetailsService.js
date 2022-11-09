import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const DetailsService = () => {
    const { title, img, description, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user)

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

                <div>
                <div className="cardshadow-xl flex flex-row items-center my-2">
                    
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-4">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                        
                    <div className="card-body">
                        <h2 className="card-title text-sm">"Their Service was too good. Very Professional."</h2>
                        <p>by Herin Khan</p>
                    </div>
                </div>

                <div className="cardshadow-xl flex flex-row items-center my-2">
                    
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-4">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                        
                    <div className="card-body">
                        <h2 className="card-title text-sm">"Their Service was too good. Very Professional."</h2>
                        <p>by Herin Khan</p>
                    </div>
                </div>

                <div className="cardshadow-xl flex flex-row items-center my-2">
                    
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-4">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                        
                    <div className="card-body">
                        <h2 className="card-title text-sm">Their Service was too good. Very Professional.</h2>
                        <p>by Herin Khan</p>
                    </div>
                </div>
                </div>

                <div className="flex justify-center mt-6">
                    <label htmlFor="my-modal-6" className="btn btn-ghost">Give Review</label>

                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Please give your review here</h3>
                            <input type="text" name="cname" placeholder="Enter Full Name" className="my-3 bg-black border border-orange-300 text-2xl"/>
                            <input type="text" name="email" placeholder="Your E-mail" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.email} readOnly/>
                            <textarea name="message" className="textarea w-full my-5 border-orange-300" placeholder="How much you like our service?"></textarea>
                            <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsService;
