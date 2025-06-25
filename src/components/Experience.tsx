import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of enterprise-scale web applications serving 100K+ users. Architected microservices infrastructure on AWS, resulting in 40% improved performance.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub Inc",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects from concept to deployment. Collaborated with design team to create responsive, user-friendly interfaces.",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      achievements: [
        "Built 15+ client projects with 98% customer satisfaction",
        "Implemented real-time features using WebSocket technology",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Focused on creating exceptional user experiences through modern frontend technologies. Worked closely with UX designers to implement pixel-perfect designs.",
      technologies: ["React", "Redux", "Sass", "Webpack"],
      achievements: [
        "Improved user engagement by 35% through UI/UX enhancements",
        "Converted legacy jQuery codebase to React",
        "Established frontend coding standards and best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey building impactful solutions and leading development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold mb-2">
                    <ExternalLink size={16} className="mr-2" />
                    {exp.company}
                  </div>

                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;