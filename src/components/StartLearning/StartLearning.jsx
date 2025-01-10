import React from "react";
import { useNavigate } from "react-router-dom";

const StartLearning = () => {
    const navigate=useNavigate()
  const lessonLength = 10;
  const lessons = [...Array(lessonLength).keys()].map((_, index) => ({
    id: index + 1,
    title: `Lesson ${index + 1}`,
    description: "Start your journey by exploring this lesson.",
  }));
  const handleViewMore=()=>{
    navigate('/tutorials')
  }
  const  hanldeLession=(id)=>{
    console.log('I am click ',id)
  }

  return (
    <div>
      <div className="py-10 justify-center bg-gray-100">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
          From the Alphabet to Fluency: Your Learning Path
        </h2>
        <h3 className="text-2xl font-bold text-center">
          Learn, Practice, Succeed Through 10 Engaging Lessons
        </h3>
        <div className="w-4/5 mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id} onClick={()=>hanldeLession(lesson.id)}
              className="card cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 w-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-lg"
            >
              <div className="card-body text-center text-white p-6">
                <h2 className="text-3xl font-bold mb-4">{lesson.title}</h2>
                <p className="text-lg">{lesson.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl py-16 text-center font-semibold  mb-4">
          Learn the Alphabet
        </h2>
        <div className="max-w-4xl  mx-auto bg-white rounded-lg shadow-lg p-6 mb-10">
          <div className="w-full h-[400px]  ">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/6p9Il_j0zjc"
              title="Learn ALL Hiragana in 1 Hour - How to Write and Read Japanese"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-96 mx-auto py-5  text-center rounded-lg ">
  <button onClick={handleViewMore} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none">
    View More
  </button>
</div>

      </div>
    </div>
  );
};

export default StartLearning;
