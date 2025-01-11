import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Lesson = () => {
  const location = useLocation();
  const lessonId = location?.state?.lessonId;
  console.log(lessonId, typeof lessonId);
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = useState(null);
  const [selectedVocab, setselectedVocab] = useState(null);

  useEffect(() => {
    if (lessonId) {
      axios
        .get("data.json")
        .then((res) => {
          const data = res.data;
          const myData = data.filter(
            (lessData) => lessData.lesson_no === Number(lessonId)
          );
          setVocabularies(myData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [lessonId]);
  const handleWhattoSay = (vocab) => {
    setselectedVocab(vocab);
    document.getElementById("my_modal_4").showModal();
  };

  console.log(vocabularies);
  const handleBackToLesson = () => {
    navigate("/start-learning");
  };
  const closeModal = () => {
    document.getElementById("my_modal_4").close();
    setselectedVocab("");
  };
  const handlePronunciation=(word)=>{
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ja-JP'; 
    window.speechSynthesis.speak(utterance);
  }
  document.title=`Lesson -${lessonId}`
  return (
    <div className="py-10">
      <div className="flex justify-center min-h-screen pb-10">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
            Lesson {lessonId}: Vocabulary Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabularies?.map((vocab) => (
           <div onClick={()=>handlePronunciation(vocab.word)}
           key={vocab.id}
           className={`border rounded-lg cursor-pointer p-4 shadow-md ${
             vocab.difficulty === "hard"
               ? "bg-red-500"
               : vocab.difficulty === "medium"
               ? "bg-yellow-500"
               : "bg-green-500"
           }`}
         >
         
                <h3 className="text-xl font-bold text-white">{vocab.word}</h3>
                <p className="text-white italic mb-1">
                  Pronunciation: {vocab.pronunciation}
                </p>
                <p className="text-white mb-1">Meaning: {vocab.meaning}</p>
                <p className="text-white">
                  Part of Speech: {vocab.part_of_speech}
                </p>
                <div className="py-2">
                  <button
                    onClick={() => handleWhattoSay(vocab)}
                    className="bg-white text-black px-5 py-2 rounded-xl"
                  >
                    When to Say
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal  modal-middle">
        <div className="modal-box max-w-xl bg-gray-200 ">
          <div className="flex flex-col start">
            <h2 className="text-2xl font-bold mb-4">
              Word: {selectedVocab?.word}
            </h2>
            <p className="text-lg mb-2">
              <strong>Meaning:</strong> {selectedVocab?.meaning}
            </p>
            <p className="text-lg mb-2">
              <strong>When to Say:</strong> {selectedVocab?.when_to_say}
            </p>
            <p className="text-lg">
              <strong>Example:</strong> {selectedVocab?.example}
            </p>
          </div>
          <div className="w-full text-center mx-auto  mt-10">
            <button
              onClick={closeModal}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            >
              Close
            </button>
          </div>
          <div className="w-full text-center mx-auto  mt-10">
            <button
              onClick={handleBackToLesson}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            >
              Back to Lesson
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Lesson;
