import React from 'react';
import { FaHtml5, FaJsSquare, FaReact, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiAdobe, SiFramer, SiCanva } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 size={50} className="text-orange-500" />, skill: "HTML", percentage: 90 },
  { icon: <SiTailwindcss size={50} className="text-sky-500" />, skill: "Tailwind CSS", percentage: 85 },
  { icon: <FaJsSquare size={50} className="text-yellow-500" />, skill: "JavaScript", percentage: 80 },
  { icon: <FaReact size={50} className="text-blue-500" />, skill: "React.js", percentage: 75 },
  { icon: <FaFigma size={50} className="text-red-500" />, skill: "Figma", percentage: 90 },
  { icon: <SiAdobe size={50} className="text-indigo-500" />, skill: "Adobe XD", percentage: 80 },
  { icon: <SiFramer size={50} className="text-pink-500" />, skill: "Framer", percentage: 70 },
  { icon: <SiCanva size={50} className="text-blue-400" />, skill: "Canva", percentage: 85 },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              {/* Skill Icon */}
              <div className="mb-6">{skill.icon}</div>

              {/* Circular Progress Bar */}
              <div className="relative mb-4">
                <svg className="w-20 h-20">
                  <circle
                    className="text-gray-700"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-orange-500"
                    strokeWidth="4"
                    strokeDasharray="226"
                    strokeDashoffset={`${226 - (226 * skill.percentage) / 100}`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="40"
                    cy="40"
                    style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span className="text-xl font-bold">{skill.percentage}%</span>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold">{skill.skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
