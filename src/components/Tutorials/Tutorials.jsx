import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Tutorials = () => {

  const navigate = useNavigate();
 

  const handleBackToLesson = () => {
    navigate("/start-learning");
  };

  document.title="Tutorials"
  const videos = [
    "https://www.youtube.com/embed/6p9Il_j0zjc",
    "https://www.youtube.com/embed/fCJZ_LkjS0I",
    "https://www.youtube.com/embed/s6DKRgtVLGA",
    "https://www.youtube.com/embed/IfUWs94G_l8",
    "https://www.youtube.com/embed/eXuEfE7P0k4",
    "https://www.youtube.com/embed/6lLvm2ToxmU",
    "https://www.youtube.com/embed/28kRZY1z0IE",
    "https://www.youtube.com/embed/12VQYnuIgrM",
  ];

  return (
    <div className="py-10">
      <div className="flex justify-center min-h-screen pb-10">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
          Japanese Language Tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                className="w-full h-64 rounded-lg"
                src={video}
                title={`Japanese Tutorial Video `}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <div className="w-full text-center mx-auto  mt-10">
            <button
              onClick={handleBackToLesson}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            >
              Learn Vocabularies
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tutorials;
 
