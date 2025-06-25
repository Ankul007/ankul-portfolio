import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 80 },
        { name: "Kubernetes", level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    return "from-yellow-500 to-orange-500";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Express.js", "Socket.io", "Jest", "Webpack", "Sass",
              "Redis", "Elasticsearch", "Firebase", "Stripe", "Auth0", "Figma"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;