import React from 'react';
import ServiceCard from './servicesCard/ServiceCard';
import Service from './servicesCard/Service';
import WinterCareTips from '../WinterCareTips';
import ExpertVets from '../ExpertVets';
import SuccessStories from './SuccessStories';

const Home = () => {

    const slides = [
        { id: "slide1", img: "https://images.unsplash.com/photo-1548546738-8509cb246ed3", title: "Cozy Winter Coat", prev: "#slide4", next: "#slide2" },
        { id: "slide2", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7", title: "Paw Protection", prev: "#slide1", next: "#slide3" },
        { id: "slide3", img: "https://images.unsplash.com/photo-1544568100-847a948585b9", title: "Fleece Sweaters", prev: "#slide2", next: "#slide4" },
        { id: "slide4", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e", title: "Indoor Boarding", prev: "#slide3", next: "#slide1" },
    ];

    return (
        <div className="w-11/12 mx-auto">
            {/* Carousel Container */}
            <div className="carousel w-full mt-5 rounded-xl shadow-xl overflow-hidden">
                {slides.map((slide) => (
                    <div key={slide.id} id={slide.id} className="carousel-item relative w-full h-75 md:h-125">
                        <img 
                            src={slide.img} 
                            className="w-full h-full object-cover" 
                            alt={slide.title} 
                        />
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-10">
                            <h2 className="text-white text-2xl md:text-4xl font-bold">{slide.title}</h2>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href={slide.prev} className="btn btn-circle btn-sm md:btn-md bg-white/30 border-none text-white hover:bg-white/50">❮</a>
                            <a href={slide.next} className="btn btn-circle btn-sm md:btn-md bg-white/30 border-none text-white hover:bg-white/50">❯</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Welcome Section */}
            <div className="text-center py-16">
                <h2 className="text-4xl font-bold text-blue-900">Welcome to WarmPaws</h2>
                <p className="mt-4 text-gray-600">Your trusted partner for pet care during the freezing winter months.</p>
            </div>
                    <div className='w-11/12 mx-auto'>
             <h2 className="text-3xl font-bold text-center mt-10">Our Featured Services</h2>
            <Service></Service>
                        </div>     
                    <WinterCareTips></WinterCareTips>

            
            <ExpertVets />  
            <SuccessStories></SuccessStories> 
        </div>

    );
};

export default Home;