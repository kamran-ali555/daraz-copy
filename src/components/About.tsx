import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Coffee, Code, FileCode, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Clock className="h-6 w-6" />, value: '5+', label: 'Years Experience' },
    { icon: <FileCode className="h-6 w-6" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="h-6 w-6" />, value: '30+', label: 'Happy Clients' },
    { icon: <Coffee className="h-6 w-6" />, value: '∞', label: 'Coffee Consumed' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Working on code" 
                className="rounded-2xl relative z-10 border border-white/10"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Frontend Development Expert</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate frontend developer with over 5 years of experience creating beautiful, responsive, and user-friendly web applications. I specialize in modern JavaScript frameworks and have a keen eye for design and user experience.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started with a curiosity about how websites work, which quickly turned into a passion for creating digital experiences that are both functional and aesthetically pleasing. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <Award className="h-6 w-6 text-secondary-400" />
              <span className="text-gray-300">Certified Web Development Professional</span>
            </div>
            
            <a href="#contact" className="btn btn-primary inline-flex">
              Let's Work Together
            </a>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;