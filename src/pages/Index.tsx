import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Scene3D from '@/components/3d/Scene3D';

const quickLinks = [
  {
    title: 'About Me',
    description: 'Learn about my background, skills, and passion for mechanical engineering',
    icon: User,
    href: '/about',
    color: 'text-primary'
  },
  {
    title: 'Experience',
    description: 'Explore my professional experience and educational journey',
    icon: Briefcase,
    href: '/experience',
    color: 'text-secondary'
  },
  {
    title: 'Projects',
    description: 'Discover my work in quality engineering and process improvement',
    icon: FolderOpen,
    href: '/projects',
    color: 'text-accent'
  },
  {
    title: 'Contact',
    description: 'Get in touch for opportunities and collaborations',
    icon: Mail,
    href: '/contact',
    color: 'text-primary'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Scene3D />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">About Rajavel T</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated mechanical engineering student with a passion for problem-solving 
                and innovation. Based in Tamil Nadu, India, I'm currently pursuing my undergraduate 
                degree with a focus on quality engineering and manufacturing process improvement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my studies, I have developed strong foundations in mechanical engineering 
                principles, gained hands-on experience with industry-standard tools like AutoCAD, 
                and actively participated in collaborative projects that enhance my teamwork and 
                project management skills.
              </p>
              <Link to="/about">
                <Button className="glass-card bg-primary hover:bg-primary/90 text-primary-foreground border-0">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold gradient-text mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">2026</div>
                    <div className="text-sm text-muted-foreground">Expected Graduation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">6+</div>
                    <div className="text-sm text-muted-foreground">Technical Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">4</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">1+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Explore My Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my journey, experience, and projects in mechanical engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={link.href} className="group block">
                  <div className="glass-card text-center p-6 hover:shadow-glow transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/30 mb-4 group-hover:scale-110 transition-transform ${link.color}`}>
                      <link.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
