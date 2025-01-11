import React from "react";
import CountUp from "react-countup";

import user from '../../assets/user.jpg';
import lesson from '../../assets/lesson.jpg';
import vocabulary from "../../assets/vocabulary.jpg";
import tutorial from "../../assets/tutorial.jpg";


const SuccessSection = () => {
    const stats = [
        { img: user, count: 1420, label: "User Count" },
        { img: lesson, count: 520, label: "Lesson Count" },
        { img: vocabulary, count: 4350, label: "Vocabulary Count" },
        { img: tutorial, count: 210, label: "Tutorial Count" },
    ];

    return (
        <div className="py-5">
            <h2 className="text-3xl py-10 font-bold text-center text-[#008575]">
Success Status            </h2>
            <div className="my-10 px-5">
                <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative h-[250px] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${stat.img})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                            <div className="absolute inset-0 flex justify-center items-center text-center text-white p-5">
                                <div>
                                    <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl">
                                        <CountUp end={stat.count} duration={4.5} separator="," />+
                                    </h2>
                                    <h3 className="text-xl font-semibold">{stat.label}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
