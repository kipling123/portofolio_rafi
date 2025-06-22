import React from "react";
import { FaGithub } from "react-icons/fa";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/poto diri.jpg";

const projects = [
  {
    id: 1,
    name: "Idea management and brainstorming application for startups.",
    technologies: ["Golang"],
    image: employeeMSImage,
    github: "https://github.com/kipling123/TubesAlpro",
  },
  {
    id: 2,
    name: "Intelligent waste classification using deep learning techniques",
    technologies: ["Python", "TensorFlow"],
    image: bookMSImage,
    github: "https://github.com/kipling123/tubes-GDGoC",
  },
  {
    id: 3,
    name: "Deep Learning for Detecting Human vs AI-Generated Images",
    technologies: ["PyTorch", "Computer Vision"],
    image: employeeMSImage,
    github: "https://colab.research.google.com/drive/1wzdinttY5fWKRvF5VEOlyKHvXMOQ20Bh",
  },
];

const Projects = () => {
  return (
    <section className="bg-white text-gray-800 py-20" id="project">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2
          className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 overflow-hidden"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:brightness-110 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
