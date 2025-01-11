import React from 'react';

// Dummy team data
const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Founder & CEO', bio: 'Passionate about language learning and tech innovation.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', role: 'Lead Language Expert', bio: 'With a PhD in Linguistics, Jane helps create immersive content.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Michael Lee', role: 'Tech Lead', bio: 'Responsible for platform development and integration.', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Sarah Johnson', role: 'Marketing Director', bio: 'Focused on community engagement and growth.', image: 'https://via.placeholder.com/150' },
];

const LanguagePartner = () => {
    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-[#008575] mb-8">Meet Our Team</h2>
            <p className="text-center text-xl text-gray-700 mb-8">
                We are a group of passionate language learners, educators, and tech experts who believe in the power of communication.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-[#008575] text-center">{member.name}</h3>
                        <p className="text-xl text-center text-gray-600">{member.role}</p>
                        <p className="text-gray-600 text-center mt-4">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LanguagePartner;
