import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ServiceCard from './ServiceCard';

const Service = () => {
     const services=useLoaderData();
 //const {id}=useParams();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
           {
            services.map(service=><ServiceCard key={service.serviceId} service={service}></ServiceCard>)
           } 
        </div>
    );
};

export default Service;