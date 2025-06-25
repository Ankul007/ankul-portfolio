import React from 'react';
import { ArrowDown, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5635AQF22JmhYrOKlw/profile-framedphoto-shrink_400_400/B56Zelw7wIHEAc-/0/1750832758124?e=1751475600&v=beta&t=vo8Rq_hDglSu7UgCD1OHj7OIhZQTUHXn2cJl1rIJpwY"
                  alt="Ankul Singh"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin size={16} />
            <span>Gurugaon, India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Ankul Singh
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
            Senior Software Engineer
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experienced software engineer with 5+ years in building scalable applications and leading development teams. 
            Currently working as SDE 3 at BharatPe, specializing in backend systems, microservices, and fintech solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get to Know Me
            </button>
            
            <button className="flex items-center space-x-2 text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
            <a href="https://drive.google.com/file/d/1-UnRvm3ZxtuSR4Yv7l-4E6Mse1oKT5Wh/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 transition-all duration-200">
              <Download size={20} />
              <span>Download Resume</span>
              </a>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;