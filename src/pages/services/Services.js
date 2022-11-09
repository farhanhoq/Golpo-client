import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto gap-10'>
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