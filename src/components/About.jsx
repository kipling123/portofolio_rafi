import React from "react";
import AboutImage from "../assets/poto diri.jpg";

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-20" id="about">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-72 h-80 rounded-xl object-cover mb-8 md:mb-0 shadow-xl ring-4 ring-blue-300 hover:scale-105 transition-transform duration-300"
          />

          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              I am a passionate{" "}
              <span className="text-blue-600 font-semibold">Machine Learning Enthusiast</span> focused on building intelligent, data-driven systems. With a strong foundation in algorithms, modeling, and real-world deployment, I strive to create impactful solutions through artificial intelligence and modern technologies.
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              {[
                { label: "Python", width: "11/12" },
                { label: "Machine Learning", width: "11/12" },
                { label: "Deep Learning", width: "10/12" },
                { label: "React JS", width: "10/12" },
                { label: "Node JS", width: "9/12" },
                { label: "SQL & NoSQL", width: "9/12" },
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <label className="w-3/12 text-sm font-medium">{skill.label}</label>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
                    <div
                      className={`bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full w-${skill.width} hover:scale-[1.03] transition-transform duration-300`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 flex justify-center md:justify-start gap-12 text-center">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "10+", label: "ML/AI Use Cases" },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
