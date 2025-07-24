import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Scene3D from './3d/Scene3D';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D enableControls />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-float" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="gradient-text">Rajavel T</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto"
          >
            Aspiring Quality Engineer | Manufacturing Process Improvement | 
            <span className="text-primary"> Mechanical Engineering Student</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated mechanical engineering student with a passion for problem-solving 
            and innovation. Currently pursuing my undergraduate degree with a focus on 
            quality engineering and manufacturing process improvement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button 
              size="lg" 
              className="glass-card bg-primary hover:bg-primary/90 text-primary-foreground border-0"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card border-primary/20 hover:bg-primary/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-16"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              className="animate-bounce hover:bg-transparent"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}