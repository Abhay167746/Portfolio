import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const experience = experiences[0]; // only one experience

  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional internship and work experience
        </p>
      </div>

      {/* Single Experience Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-6 sm:p-10 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105">
          
          {/* Header */}
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-gray-300">{experience.company}</h4>
              <p className="text-sm text-gray-500 mt-1">
                {experience.date}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-400">{experience.desc}</p>

          {/* Skills */}
          <div className="mt-6">
            <h5 className="font-medium text-white mb-2">Skills:</h5>
            <ul className="flex flex-wrap">
              {experience.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#8245ec] text-gray-300 px-4 py-1 text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
