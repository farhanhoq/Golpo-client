import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard';
// import ServiceCard from './ServiceCard';

const Services = () => {

    const services = useLoaderData();
    console.log(services)

    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto my-10 gap-10'>
            {
                services.map(s => <ServiceCard
                    key={s._id}
                    service={s}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;