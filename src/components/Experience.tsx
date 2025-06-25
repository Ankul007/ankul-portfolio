import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer Engineer 3",
      company: "BharatPe",
      location: "Gurugaon, India",
      period: "Jan 2024 - Present",
      description: "Leading backend development initiatives for one of India's largest fintech platforms, focusing on payment systems and merchant solutions.",
      technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "Redis", "Kafka"],
      achievements: [
        "Integrated multiple lending partners including Capri, Credit Saison, and Muthoot, contributing to a 20% increase in BharatPe’s loan distribution revenue.",
	      "Designed and developed an in-house Insurance product for merchant loans, expanding BharatPe’s financial offerings.",
	      "Led end-to-end delivery of key features such as eKYC integration, vernacular language support for KFS, and others—overseeing the entire project lifecycle, from requirement gathering to production releases.",
	      "Managed and mentored a team of 6–8 engineers, ensuring timely delivery, code quality, and alignment with business goals.",
	      "Spearheaded the migration from RIPL to RDSPL, including CI/CD pipeline setup, database migration, and login/account transition, ensuring zero-downtime deployment.",
	      "Mentored 10+ engineers, streamlining onboarding and enhancing backend system expertise across the team.",
	      "Conducted 20+ technical interviews, playing a key role in building a strong, cohesive, and high-performing engineering team."
      ]
    },
    {
      title: "Software Developer Engineer 2",
      company: "Morgan Stanley",
      location: "Bengaluru, India",
      period: "Mar 2022 - Jan 2024",
      description: "Developed and maintained critical financial systems and trading platforms, working with high-frequency data and real-time processing.",
      technologies: ["Python", "Java 8", "Db2", "sybase", "ETL process"],
      achievements: [
        "Developed and enhanced enterprise-grade software applications for the financial industry.",
        "Collaborated with cross-functional teams to deliver high-quality solutions within aggressive timelines.",
        "Designed, implemented, and tested software components, following industry best practices and coding standards.",
        "Diagnosed and resolved complex technical issues to ensure application stability and performance.",
      ]
    },
    {
      title: "Software Developer Engineer 1 - Software Developer Engineer 2",
      company: "Snapdeal India Pvt Ltd.",
      location: "Bengaluru, India",
      period: "Feb 2020 - Mar 2022",
      description: "Worked on e-commerce platform development, focusing on catalog management, search optimization, and user experience improvements.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Elasticsearch", "Redis"],
      achievements: [
        "Worked across multiple components of the supply chain ecosystem, driving functional enhancements and performance improvements.",
        "Owned end-to-end development and maintenance of critical modules including RMS, QAAS, and the Tax Engine.",
        "Built and maintained scalable software solutions to improve user experience and optimize system performance.",
        "Actively participated in code reviews to ensure high code quality, maintainability, and adherence to engineering best practices."
      ]
    },
    {
      title: "Intern - Software Developer Engineer 1",
      company: "Quikr India Pvt. Ltd",
      location: "Bengaluru, India",
      period: "Jul 2019 - Feb 2020",
      description: "Started as an intern and quickly progressed to full-time role, working on classified ads platform and user engagement features.",
      technologies: ["Node.js", "React", "JavaScript", "Java", "Spring", "MySQL", "MongoDB"],
      achievements: [
       "Contributed to the development of various components within the supply chain domain, enhancing system functionality and efficiency.",
       "Took complete ownership of critical modules such as RMS, QAAS, and the Tax Engine, ensuring their stability and scalability.",
       "Developed and maintained robust software solutions aimed at improving user experience and optimizing application performance.",
       "Participated in peer code reviews to uphold code quality, readability, and compliance with best development practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            My professional journey building scalable systems and leading development teams across fintech and e-commerce
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
                    <h3 className="text-l font-bold text-gray-900">{exp.title}</h3>
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