import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ServiceCard from '../shared/ServiceCard';

const UserAddedService = () => {

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    fetch(`http://localhost:5000/services?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setServices(data));

    return (
        <div>
            <div className='flex flex-col my-10'>
            <h2 className='text-4xl text-center font-bold my-3'>Service Added by User</h2>
            <div className='grid grid-cols-3 w-4/5 mx-auto my-10 gap-10'>
            {
                services.slice(-3).map(s => <ServiceCard
                    key={s._id}
                    service={s}
                ></ServiceCard>)
            }
            </div>
            <Link to='/services' className='btn btn-ghost text-2xl w-1/5 mx-auto'>See More</Link>
        </div>
        </div>
    );
};

export default UserAddedService;