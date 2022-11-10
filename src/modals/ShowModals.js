import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ShowModals = ({handleReview}) => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">Please give your review here</h3>
                    <form onSubmit={handleReview}>
                        <input type="text" name="cname" placeholder="Enter Full Name" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.displayName}/>
                        <input type="text" name="email" placeholder="Your E-mail" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.email} readOnly/>
                        <textarea name="message" className="textarea w-full my-5 border-orange-300" placeholder="How much you like our service?"></textarea>
                        <div className="modal-action">
                            <input className="btn" type="submit" value="Done" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShowModals;