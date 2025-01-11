import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const AboutUS = () => {
  const projectList = [
    {
      projectName: "PayMaya",
      description:
        "An MFS app built using HTML, Tailwind CSS, and JavaScript, demonstrating my expertise in front-end development. The app focuses on secure, fast, and user-friendly digital payment solutions.",
      LiveLink: "https://mdimranictiu.github.io/PayMaya/",
    },
    {
      projectName: "Peddy",
      description:
        "A pet adoption web platform designed to connect pet lovers with their perfect companions.",
      LiveLink: "https://mdimran-assignment-6.surge.sh/",
    },
    {
      projectName: "VisaNavigator",
      description:
        "A platform for managing and exploring visa-related information, built with an emphasis on user-friendly interfaces and efficient data management.",
      LiveLink: "https://visa-navigator-97b76.web.app/",
    },
    {
      projectName: "Library Management System",
      description:
        "A comprehensive system with features like a navbar, footer, book categories, and more to manage library resources effectively.",
      LiveLink: "https://library-management-syste-4cae8.web.app/",
    },
    {
      projectName: "BPL DREAM-11",
      description:
        "A fantasy cricket platform where users can create their dream teams, developed using JavaScript and React.",
      LiveLink: "https://imran-assignment-07.surge.sh/",
    },
    {
      projectName: "Gadget Heaven",
      description:
        "An e-commerce platform focused on selling tech gadgets, highlighting efficient UI/UX design and seamless functionality.",
      LiveLink: "https://gadget-heaven-pi.vercel.app/",
    },
  ];

  return (
    <div>
      <div className="flex justify-center py-10 min-h-screen bg-gray-100">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center mb-6">
            About Me
          </h2>
          <h3 className="text-xl text-center py-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
  Hi, I am MD IMRAN SHEIKH. I completed my graduation from Islamic University in ICT Department. I continuously acquire knowledge about Web development.
</h3>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectList.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-bold mb-2">{project.projectName}</h4>
                    <p className="text-sm mb-4">{project.description}</p>
                    <a
                      href={project.LiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium rounded transition-all"
                      style={{
                        background: "linear-gradient(to right, #34d399, #3b82f6)",
                        color: "white",
                      }}
                    >
                      Visit Project
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                <li>
                  <strong>Programming:</strong> JavaScript, HTML, CSS, Node.js
                </li>
                <li>
                  <strong>Frameworks:</strong> React, Tailwind CSS
                </li>
                <li>
                  <strong>Tools:</strong> Git, GitHub
                </li>
                <li>
                  <strong>API and Database:</strong> Data fetching, API
                  integration, JSON manipulation
                </li>
                <li>
                  <strong>Soft Skills:</strong> Problem-solving, time management,
                  adaptability, team collaboration
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                My vision is to explore new technologies and create a software company
                where people collaborate on impactful projects. Through this, I aim
                to contribute to economic growth and foster innovation.
              </p>
            </div>
            <div>
  <h3 className="text-xl font-semibold text-gray-800">Contact with Us</h3>
  <div className="py-5 flex flex-row gap-5 text-4xl">
    <a href="https://github.com/mdimranictiu/" target="_blank">
    <FaGithub></FaGithub>
    </a>
    <a href="https://www.linkedin.com/in/md-imran-sheikh-bd/" target="_blank">
    <FaLinkedin></FaLinkedin>
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
