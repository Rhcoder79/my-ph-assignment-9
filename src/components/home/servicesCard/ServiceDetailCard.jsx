import React from 'react';
import { toast } from 'react-toastify';
const ServiceDetailCard = ({details}) => {
    if (!details || !details.serviceName) {
        return <div>Loading details...</div>;
    }
    const { serviceName, image, category, description, price, rating, providerName } = details;
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
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Top Section: Image and Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="relative">
                    <img 
                        src={image} 
                        alt={serviceName} 
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </span>
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{serviceName}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    
                    <div className="space-y-2 mb-6 text-gray-700">
                        <p><strong>Provider:</strong> {providerName}</p>
                        <p><strong>Price:</strong> <span className="text-green-600 font-bold">${price}</span></p>
                        <p><strong>Rating:</strong> ⭐ {rating}</p>
                    </div>
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Bottom Section: Booking Form */}
            <div className="p-8 bg-gray-50">
                <h3 className="text-xl font-bold text-center mb-6">Book This Service</h3>
                <form onSubmit={handleBooking} className="max-w-md mx-auto space-y-4">
                    <div className="form-control">
                        <label className="label font-semibold">Your Name</label>
                        <input 
                            name='name' 
                            type="text" 
                            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400" 
                            placeholder="Enter your name" 
                            required 
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label font-semibold">Your Email</label>
                        <input 
                            name='em' 
                            type="email" 
                            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>

                    <button type='submit' className="btn btn-neutral w-full mt-6 text-lg">
                        Confirm Booking Now
                    </button>
                </form>
            </div>
        </div>
    );
};
    


export default ServiceDetailCard;