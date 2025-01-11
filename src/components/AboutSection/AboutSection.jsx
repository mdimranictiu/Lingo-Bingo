import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


const AboutSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);
    
    return (
        <section className=" py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2  className="text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-green-500 mb-6">
                    Our Mission and Vission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Our mission and vision are to empower learners to learn vocabulary easily and to make the learning process efficient and productive.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    How You Can Learn Vocabulary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div data-aos="fade-right" className="bg-white shadow-lg p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                            Interactive Word Lists
                        </h4>
                        <p className="text-gray-600 ">
                            Explore word lists with proper definitions, pronunciations and easy example to build you vocabulary effectively.
                           
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-white shadow-lg p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                            Videos
                        </h4>
                        <p className="text-gray-600">
                            By watching animation videos you can learn vocabulary easily .
                        </p>
                    </div>
                    <div data-aos="fade-up-right" className="bg-white shadow-lg p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                            Text to Speech
                        </h4>
                        <p className="text-gray-600">
                           To learn you have to hear. In Our web application we added features that convert text to speech.
                        </p>
                    </div>
                    <div data-aos="fade-up-left" className="bg-white  shadow-lg p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                            Conversations
                        </h4>
                        <p className="text-gray-600">
                            We engage another learner with you so that you can continue you learning thru conversations.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-gray-600 text-lg">
                    Without any hesitation, Join us and learn your language effectively!
                    </p>
                    <button className="mt-6 px-6 py-3  text-white rounded-lg bg-gradient-to-br from-blue-500 to-green-500">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
