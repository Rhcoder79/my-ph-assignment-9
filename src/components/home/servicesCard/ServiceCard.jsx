import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    return (
        <div className='card border border-gray-400 p-4 shadow-sm '>
            <div className='mt-1'><img className='rounded-xl h-48 w-full object-cover' src={service.image} alt={service.serviceName} /></div>
            <div>
                <h2 className='text-xl font-bold text-blue-900'>{service.serviceName}</h2>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center gap-1'><FaStar className='text-orange-500'  />
                   <p className=' font-semibold '> {service.rating}</p> </div>
             <div>   <p className='font-bold text-xl text-black'>${service.price}</p></div>
            </div>
            <div className='mt-1'>
               <Link to={`/services/${service.serviceId}`}><button className='btn btn-outline btn-primary w-full'> View Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;