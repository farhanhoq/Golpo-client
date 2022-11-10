import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import ClipLoader from "react-spinners/ClipLoader";
import ServiceCard from '../shared/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            setLoading(false);
    }, [])
    console.log(services)

    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto my-10 gap-10'>
            <Helmet>
                <title>Golpo | Services</title>
            </Helmet>
            {
                services.map(s => {
                    if (loading) {
                        return <ClipLoader></ClipLoader>
                    } else {
                        return <ServiceCard key={s._id} service={s}></ServiceCard>;
                    }
                })
            }
        </div>
    );
};

export default Services;