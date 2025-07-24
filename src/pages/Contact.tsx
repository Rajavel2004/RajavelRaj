import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Scene3D from '@/components/3d/Scene3D';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rajavel1979@rajavel@gmail.com',
    href: 'mailto:rajavel197@rajavel@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9600822562',
    href: 'tel:+919600822562'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tiruvallu, Tamil Nadu, India',
    href: '#'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajavel-t-24b796208',
    href: 'https://linkedin.com/in/rajavel-t-24b796208'
  }
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

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
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's connect and discuss opportunities in mechanical engineering and quality improvement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card">
                <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and connections in the field of 
                  mechanical engineering. Whether you're looking for an intern, want to discuss 
                  a project, or just want to connect, feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 hover:scale-105"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex-shrink-0">
                          <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card">
                <h3 className="text-xl font-bold gradient-text mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently based in Tamil Nadu, India, I'm open to internship opportunities, 
                  collaborative projects, and professional networking. I'm particularly interested 
                  in quality engineering, manufacturing process improvement, and innovative 
                  mechanical solutions.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card">
                <h2 className="text-2xl font-bold gradient-text mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="glass border-glass-border/20 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="glass border-glass-border/20 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="glass border-glass-border/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      className="glass border-glass-border/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      className="glass border-glass-border/20 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glass-card bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}