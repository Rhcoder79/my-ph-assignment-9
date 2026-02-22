import React from 'react';
import { FaStar } from 'react-icons/fa';

const SuccessStories = () => {
    const stories = [
        {
            id: 1,
            petName: "Buddy",
            owner: "Robert Wilson",
            story: "Buddy used to shiver all night during December. After getting a custom coat and a heated bed from WarmPaws, he sleeps like a king! Truly grateful for their care.",
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400",
        },
        {
            id: 2,
            petName: "Luna",
            owner: "Sarah Adams",
            story: "Luna's paws were getting cracked from the icy roads. Their winter paw treatment worked like magic. Now she enjoys her winter walks without any pain!",
            img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
        },
        {
            id: 3,
            petName: "Max",
            owner: "James Miller",
            story: "The indoor exercise program is a lifesaver. Max stays active and happy even when it's -10°C outside. The trainers are highly professional and caring.",
            img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400",
        }
    ];

    return (
        <section className="py-16 bg-linear-to-r from-blue-900 to-blue-700 rounded-3xl my-10 px-8 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 italic">Success Stories: Happy Paws</h2>
                <p className="text-center text-blue-100 mb-12">Real experiences from pet parents who trust our winter care services.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map(story => (
                        <div key={story.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={story.img} 
                                    alt={story.petName} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                                />
                                <div>
                                    <h3 className="font-bold text-lg text-yellow-400">{story.petName}</h3>
                                    <p className="text-xs text-blue-100">Owner: {story.owner}</p>
                                </div>
                            </div>
                            <p className="italic text-sm leading-relaxed text-gray-100">
                                "{story.story}"
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                               <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;