import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ServiceDetailCard from '../components/home/servicesCard/ServiceDetailCard';

const ServiceDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [details,setDetails]=useState({});

    useEffect(()=>{
    const serviceDetail=data.find(singleService=>singleService.serviceId==id);
    setDetails(serviceDetail)
    },[data,id])
    return (
        <div className='min-h-screen bg-gray-50 py-10 px-4'>
            
            <div className='max-w-4xl mx-auto'>
                <ServiceDetailCard details={details}></ServiceDetailCard>
            </div>
        </div>
    );
};

export default ServiceDetails;