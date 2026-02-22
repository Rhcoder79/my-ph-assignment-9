import React from 'react';
import Service from '../components/home/servicesCard/Service';

const ServicePage = () => {
    return (
        <div>
             <div className='w-11/12 mx-auto'>
                         <h2 className="text-3xl font-bold text-center mt-10">Our Featured Services</h2>
                        <Service></Service>
                                    </div> 
          
        </div>
    );
};

export default ServicePage;