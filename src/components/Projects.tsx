import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather monitoring system with predictive analytics and customizable alerts for multiple locations.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Python", "Django", "Chart.js", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Prisma", "Redis", "OAuth"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout planning, progress tracking, and social features for motivation.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course creation, progress tracking, quizzes, and video streaming capabilities.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MySQL", "Video.js", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-200"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;