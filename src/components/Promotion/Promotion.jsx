import React from 'react';
import animationLottie from '../../assets/Animation - 1736568497903.json';
import Lottie from 'lottie-react';
import 'animate.css';
import { Link } from 'react-router-dom';



const Promotion = () => {
    return (
        <div className="bg-[#100F3B] w-full h-auto py-10">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 px-5">
                <div className="w-full lg:w-1/2">
                    <Lottie animationData={animationLottie} loop={true} />
                </div>
                <div className="w-full flex animate__heartBeat flex-col items-center lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl text-center animate__backInRight  text-white uppercase italic font-extrabold mb-3">
                        Power Up With
                    </h2>
                    <h2 className="text-7xl max-sm:text-4xl  uppercase italic font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text mb-6">
                        Super Lingo Bingo
                    </h2>
                    
                    <Link to="/start-learning"><button className="bg-white  uppercase  px-6 py-3 rounded-lg  transition duration-300">
                        Try 14 days free
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
