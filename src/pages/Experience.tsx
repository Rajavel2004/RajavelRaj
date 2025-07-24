import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const experiences = [
  {
    company: 'Brakes India',
    position: 'Internship Trainee',
    location: 'Sholavaram, Tamil Nadu, India',
    duration: 'February 2025 - March 2025 (2 months)',
    type: 'Internship',
    description: [
      'Gained hands-on experience in automotive brake system manufacturing',
      'Learned about quality control processes in automotive industry',
      'Observed manufacturing workflows and process optimization techniques',
      'Collaborated with engineering teams on production line improvements'
    ]
  }
];

const education = [
  {
    institution: 'Panimalai Engineering College',
    degree: 'Bachelor of Engineering - BE, Mechanical Engineering',
    duration: 'November 2022 - May 2026',
    location: 'Tamil Nadu, India',
    description: [
      'Comprehensive curriculum covering mechanical engineering fundamentals',
      'Hands-on experience with CAD software and engineering design',
      'Focus on manufacturing processes and quality engineering',
      'Active participation in collaborative projects and practical applications'
    ]
  },
  {
    institution: 'QSpiders - Software Testing Training Institute',
    degree: 'Software Testing',
    duration: 'December 2024 - July 2025',
    location: 'India',
    description: [
      'Comprehensive training in software testing methodologies',
      'Hands-on experience with testing tools and frameworks',
      'Quality assurance best practices and automation testing',
      'Bridge between mechanical engineering and software quality'
    ]
  },
  {
    institution: 'Calavala Cunnan Chetty\'s Hindu Matric Higher Secondary School',
    degree: 'High School Diploma',
    duration: 'August 2008 - May 2022',
    location: 'Tamil Nadu, India',
    description: [
      'Strong foundation in mathematics and sciences',
      'Developed analytical thinking and problem-solving skills',
      'Active participation in academic and extracurricular activities'
    ]
  }
];

const certifications = [
  {
    title: 'UiPath Academy Automation Explorer Training',
    issuer: 'UiPath',
    date: '2024',
    description: 'Comprehensive training in robotic process automation (RPA) and automation technologies'
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Scene3D />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Experience & Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey through learning and professional development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Professional Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{exp.position}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Education</h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        {edu.location && (
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Certifications</h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-1">{cert.title}</h3>
                      <p className="text-muted-foreground mb-2">{cert.issuer} • {cert.date}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}