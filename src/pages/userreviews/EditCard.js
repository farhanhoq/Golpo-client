import React from 'react';

const EditCard = () => {
    return (
        <div>
            <form>
                <input type="text" name="cname" placeholder="Enter Full Name" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.displayName}/>
                <input type="text" name="email" placeholder="Your E-mail" className="my-3 bg-black border border-orange-300 text-2xl" defaultValue={user?.email} readOnly/>
                <textarea name="message" className="textarea w-full my-5 border-orange-300" placeholder="How much you like our service?"></textarea>
                <div className="modal-action">
                    <input className="btn" type="submit" value="Done" />
                </div>
            </form>
        </div>
    );
};

export default EditCard;