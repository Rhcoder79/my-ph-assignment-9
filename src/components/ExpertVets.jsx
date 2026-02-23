import React from 'react';

const ExpertVets = () => {
    const vets = [
        { id: 1, name: "Dr. Sarah Johnson", specialist: "Pet Nutritionist", img: "https://i.ibb.co.com/Lzk4gwzV/doc1.jpg" },
        { id: 2, name: "Dr. Robert Smith", specialist: "Winter Health Expert", img: "https://i.ibb.co.com/SXhvpH5m/doc2.png" },
        { id: 3, name: "Dr. Emily Davis", specialist: "Behavioral Specialist", img: "https://i.ibb.co.com/mV6840CS/doc3.webp" },
    ];

    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Meet Our Expert Vets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {vets.map(vet => (
                    <div key={vet.id} className="text-center group">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2 group-hover:ring-blue-500 transition-all">
                                <img src={vet.img} alt={vet.name} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold">{vet.name}</h3>
                        <p className="text-blue-600 font-medium">{vet.specialist}</p>
                        <button className="btn btn-xs btn-outline btn-primary mt-3">Book Consultation</button>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default ExpertVets;