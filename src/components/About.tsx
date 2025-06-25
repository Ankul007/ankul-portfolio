import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Building web applications with modern technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance First",
      description: "Optimizing for speed and user experience"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centered Design",
      description: "Creating interfaces that users love to interact with"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Always Learning",
      description: "Staying current with the latest industry trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple, 
            beautiful solutions. When I'm not coding, you'll find me exploring new technologies 
            or contributing to open source projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into software development began during my computer science studies, 
                where I discovered my passion for creating digital solutions that make a real impact. 
                What started as curiosity about how websites work has evolved into a career dedicated 
                to building exceptional user experiences.
              </p>
              <p>
                Over the past five years, I've had the privilege of working with startups and 
                established companies, helping them bring their visions to life through code. 
                I specialize in full-stack development, with a particular focus on React, Node.js, 
                and modern cloud architectures.
              </p>
              <p>
                Beyond technical skills, I believe in the power of collaboration and continuous learning. 
                I'm always excited to tackle new challenges and explore emerging technologies that can 
                create better solutions for users and businesses alike.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;