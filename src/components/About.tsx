import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Building scalable applications and leading development teams"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fintech Expertise",
      description: "Specialized in payment systems and financial technology"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Leading and mentoring development teams at scale"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Always Learning",
      description: "Staying current with the latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer who loves building robust, scalable systems that solve real-world problems. 
            Currently leading development initiatives at BharatPe, one of India's leading fintech companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey in software engineering began with a strong foundation in computer science, 
                and over the past 5+ years, I've had the privilege of working with some of India's most 
                innovative companies in the fintech and e-commerce space.
              </p>
              <p>
                Starting as an intern at Quikr and progressing through roles at Snapdeal, Morgan Stanley, 
                and now BharatPe, I've gained extensive experience in building large-scale distributed systems, 
                payment platforms, and leading cross-functional teams.
              </p>
              <p>
                I specialize in backend development, microservices architecture, and have a deep understanding 
                of financial systems. I'm passionate about writing clean, maintainable code and mentoring 
                junior developers to help them grow in their careers.
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
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;