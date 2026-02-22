import React from 'react';

const WinterCareTips = () => {
    const tips = [
        { id: 1, title: "Keep Paws Dry", desc: "Always wipe your pet's paws after a walk to remove salt and ice.", icon: "🐾" },
        { id: 2, title: "Warm Bedding", desc: "Ensure their bed is off the cold floor and has extra blankets.", icon: "🛌" },
        { id: 3, title: "Limit Outdoor Time", desc: "If it's too cold for you, it's probably too cold for them.", icon: "❄️" },
        { id: 4, title: "Stay Hydrated", desc: "Pets need plenty of fresh water even in winter to prevent dry skin.", icon: "💧" },
    ];

    return (
        <section className="bg-blue-50 py-16 rounded-3xl my-10 px-5">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Winter Care Tips for Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map(tip => (
                    <div key={tip.id} className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-3">{tip.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WinterCareTips;