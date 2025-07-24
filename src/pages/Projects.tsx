import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/3d/Scene3D';

const projects = [
  {
    title: 'Manufacturing Process Optimization',
    description: 'Developed a comprehensive analysis of manufacturing workflows to identify bottlenecks and improve efficiency in automotive brake system production.',
    technologies: ['Process Analysis', 'Quality Control', 'Lean Manufacturing', 'CAD Design'],
    category: 'Manufacturing',
    status: 'Completed',
    date: 'March 2025',
    highlights: [
      'Identified 15% efficiency improvement opportunities',
      'Reduced waste in production line by implementing lean principles',
      'Created detailed process flow documentation',
      'Collaborated with cross-functional teams for implementation'
    ]
  },
  {
    title: 'AutoCAD Mechanical Design Portfolio',
    description: 'Collection of mechanical component designs and assemblies created using AutoCAD, demonstrating proficiency in technical drawing and design principles.',
    technologies: ['AutoCAD', 'Technical Drawing', 'Mechanical Design', '3D Modeling'],
    category: 'Design',
    status: 'Ongoing',
    date: 'Ongoing',
    highlights: [
      'Created 50+ technical drawings and 3D models',
      'Demonstrated understanding of GD&T principles',
      'Designed various mechanical components and assemblies',
      'Applied engineering standards and best practices'
    ]
  },
  {
    title: 'Quality Control System Analysis',
    description: 'Analyzed and proposed improvements to quality control systems in manufacturing environments, focusing on statistical process control and quality assurance.',
    technologies: ['Quality Control', 'Statistical Analysis', 'Process Improvement', 'Data Analysis'],
    category: 'Quality Engineering',
    status: 'Completed',
    date: 'February 2025',
    highlights: [
      'Developed quality metrics dashboard',
      'Implemented statistical process control methods',
      'Reduced defect rates through systematic analysis',
      'Created quality assurance documentation'
    ]
  },
  {
    title: 'Automation Explorer Training Project',
    description: 'Completed comprehensive training in robotic process automation (RPA) through UiPath Academy, exploring automation opportunities in engineering processes.',
    technologies: ['UiPath', 'RPA', 'Process Automation', 'Workflow Design'],
    category: 'Automation',
    status: 'Completed',
    date: 'December 2024',
    highlights: [
      'Mastered UiPath Studio fundamentals',
      'Created automated workflows for data processing',
      'Explored automation applications in engineering',
      'Earned UiPath Academy certification'
    ]
  }
];

const categories = ['All', 'Manufacturing', 'Design', 'Quality Engineering', 'Automation'];

export default function Projects() {
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
              <span className="gradient-text">Projects & Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my experience in mechanical engineering, quality control, and process improvement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`px-6 py-2 rounded-full glass-card transition-all duration-200 ${
                  category === 'All' 
                    ? 'bg-primary/20 text-primary border-primary/30' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group hover:shadow-glow transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-semibold text-sm uppercase tracking-wider">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex gap-3 pt-4 border-t border-glass-border/20">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass border-primary/20 hover:bg-primary/10 text-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-card max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold gradient-text mb-4">Interested in Collaboration?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always looking for new opportunities to apply my skills in mechanical engineering, 
                quality control, and process improvement. Let's discuss how we can work together!
              </p>
              <Button size="lg" className="glass-card bg-primary hover:bg-primary/90 text-primary-foreground border-0">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}