import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const EditReview = ({review}) => {

    const { user } = useContext(AuthContext);

    
    return (
        <div className='pb-10'>
            <form>
                <input type="text" name="cname" placeholder="Enter Full Name" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.displayName}/>
                <input type="text" name="email" placeholder="Your E-mail" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.email} readOnly/>
                <textarea name="message" className="textarea w-full my-5 border-orange-300" placeholder="How much you like our service?"></textarea>
                
                    <input className="btn" type="submit" value="Done" />
            </form>
        </div>
    );
};

export default EditReview;