import { motion } from 'framer-motion';
import { Code, Cog, Users, Award } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const skills = [
  { name: 'Requirements Analysis', level: 90 },
  { name: 'Manufacturing Processes', level: 85 },
  { name: 'Quality Control', level: 88 },
  { name: 'AutoCAD', level: 80 },
  { name: 'Engineering Graphics', level: 85 },
  { name: 'Problem Solving', level: 92 },
];

const languages = [
  { name: 'German', level: 'Elementary' },
  { name: 'Japanese', level: 'Elementary' },
  { name: 'English', level: 'Professional Working' },
  { name: 'Tamil', level: 'Native' },
];

const achievements = [
  {
    icon: Award,
    title: 'UiPath Academy Automation Explorer Training',
    description: 'Completed comprehensive training in automation technologies'
  },
  {
    icon: Cog,
    title: 'Manufacturing Process Improvement',
    description: 'Specialized in optimizing manufacturing workflows and quality control'
  },
  {
    icon: Users,
    title: 'Collaborative Project Experience',
    description: 'Enhanced teamwork and project management skills through group projects'
  },
  {
    icon: Code,
    title: 'Industry-Standard Software',
    description: 'Proficient in AutoCAD, Engineering Graphics, and analysis tools'
  }
];

export default function About() {
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
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about innovation and excellence in mechanical engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card">
                <h2 className="text-3xl font-bold gradient-text mb-6">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a dedicated and ambitious mechanical engineering student with a passion 
                    for problem-solving and innovation. Currently pursuing my undergraduate degree 
                    in Mechanical Engineering, I am committed to gaining a comprehensive understanding 
                    of the principles and applications within the field.
                  </p>
                  <p>
                    Throughout my studies, I have developed a strong foundation in mechanical 
                    engineering principles, including AutoCAD, Engineering Graphics, and various 
                    analysis tools. I have gained hands-on experience in utilizing industry-standard 
                    software and tools to analyze and design mechanical systems.
                  </p>
                  <p>
                    Additionally, I have actively participated in collaborative projects, enhancing 
                    my teamwork and project management skills. My goal is to contribute to innovative 
                    solutions in manufacturing processes and quality engineering.
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="glass-card">
                <h3 className="text-2xl font-bold gradient-text mb-6">Languages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Skills */}
              <div className="glass-card">
                <h3 className="text-2xl font-bold gradient-text mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-primary h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="glass-card">
                <h3 className="text-2xl font-bold gradient-text mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}