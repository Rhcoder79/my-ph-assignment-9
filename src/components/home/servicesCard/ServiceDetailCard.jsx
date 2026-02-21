import React from 'react';
import { toast } from 'react-toastify';
const ServiceDetailCard = ({details}) => {
    if (!details || !details.serviceName) {
        return <div>Loading details...</div>;
    }
  const handleBooking=(e)=>{
   e.preventDefault();
   const form=e.target;
   const email=form.em.value;
   const name=form.name.value;
   console.log({name,email});
      toast(`Successfully Booked! ${details.serviceName}`);
     
      form.reset();
  }
    return (
        <div>
            <h2>{details.description}</h2>
            <form onSubmit={handleBooking} className="card-body">
        <fieldset className="fieldset">
  
            {/* name */}
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required />
            {/* email */}
          <label className="label">Email</label>
          <input name='em' type="email" className="input" placeholder="Email" required />
          <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
      </form>
            
        </div>
    );
};

export default ServiceDetailCard;