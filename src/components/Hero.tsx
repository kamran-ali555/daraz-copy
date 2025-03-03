import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Alex Morgan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Expert Frontend Developer</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I craft beautiful, responsive, and user-friendly web experiences with modern technologies and best practices.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#about" className="btn btn-outline">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center space-x-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Alex Morgan" 
                className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;